(function () {
  "use strict";

  var D = window.STORE;
  if (!D) return;
  var s = D.site;

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- fill site info ---------- */
  document.title = s.brand + " - " + s.slogan;
  $all("[data-brand]").forEach(function (el) { el.textContent = s.shortName; });
  $all("[data-brand-full]").forEach(function (el) { el.textContent = s.brand; });
  $all("[data-slogan]").forEach(function (el) { el.textContent = s.slogan; });
  $all("[data-email]").forEach(function (el) { el.href = "mailto:" + s.email; el.textContent = s.email; });
  $all("[data-address]").forEach(function (el) { el.textContent = s.address; });
  $all("[data-year]").forEach(function (el) { el.textContent = s.since; });

  var waUrl = "https://wa.me/" + s.whatsapp;
  var waShort = "+" + s.whatsapp;
  $all("[data-wa]").forEach(function (el) { el.href = waUrl; });
  $all("[data-wa-text]").forEach(function (el) { el.textContent = waShort; });
  var wechatEl = $("#wechatId");
  if (wechatEl) wechatEl.textContent = s.wechat;

  var yearEl = $("#curYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- toast ---------- */
  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }

  /* ---------- copy wechat ---------- */
  if (wechatEl) {
    wechatEl.addEventListener("click", function () {
      var done = function () { toast("WeChat ID copied: " + s.wechat); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(s.wechat).then(done, function () { fallbackCopy(done); });
      } else { fallbackCopy(done); }
    });
  }
  function fallbackCopy(done) {
    var ta = document.createElement("textarea");
    ta.value = s.wechat;
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- sticky header ---------- */
  var header = $("#header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  /* ---------- mobile nav ---------- */
  var navToggle = $("#navToggle");
  var navLinks = $("#navLinks");
  navToggle.addEventListener("click", function () { navLinks.classList.toggle("open"); });
  $all(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { navLinks.classList.remove("open"); });
  });

  /* ---------- product media helper ---------- */
  function placeholderHTML(icon, color) {
    return '<div class="p-media" style="background:linear-gradient(135deg,' + color + '22,' + color + '88)"><span class="p-icon">' + icon + '</span></div>';
  }
  function mediaHTML(p) {
    if (!p.image) return placeholderHTML(p.icon, p.color);
    return '<div class="p-media" style="background:linear-gradient(135deg,' + p.color + '22,' + p.color + '88)">' +
      '<span class="p-icon">' + p.icon + '</span>' +
      '<img src="images/products/' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.style.display=\'none\'">' +
      '</div>';
  }

  /* ---------- filters ---------- */
  var filtersEl = $("#filters");
  var gridEl = $("#productGrid");
  var currentCat = "All";

  function buildFilters() {
    var cats = ["All"].concat(D.categories);
    filtersEl.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn' + (c === currentCat ? " active" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
    $all(".filter-btn", filtersEl).forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentCat = btn.getAttribute("data-cat");
        $all(".filter-btn", filtersEl).forEach(function (b) { b.classList.toggle("active", b === btn); });
        renderProducts();
      });
    });
  }

  /* ---------- product grid ---------- */
  function cardHTML(p) {
    return '<article class="card">' +
      mediaHTML(p) +
      (p.tag ? '<span class="p-tag">' + esc(p.tag) + "</span>" : "") +
      '<div class="p-body">' +
        '<span class="p-cat">' + esc(p.category) + "</span>" +
        '<h3 class="p-name">' + esc(p.name) + "</h3>" +
        '<p class="p-spec">' + esc(p.spec) + "</p>" +
        '<div class="p-meta">' +
          '<div><small>MOQ</small><strong>' + esc(p.moq) + "</strong></div>" +
          '<div><small>Price</small><strong>' + esc(p.price) + "</strong></div>" +
        "</div>" +
        '<div class="p-btns">' +
          '<button class="btn btn-primary" data-detail="' + p.id + '">Details</button>' +
          '<a class="btn btn-accent" href="#contact" data-inquire="' + p.id + '">Inquire</a>' +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function renderProducts() {
    var list = currentCat === "All" ? D.products : D.products.filter(function (p) { return p.category === currentCat; });
    gridEl.innerHTML = list.map(cardHTML).join("");

    /* detail buttons */
    $all("[data-detail]", gridEl).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = D.products[parseInt(btn.getAttribute("data-detail"), 10)];
        if (p) openModal(p);
      });
    });
    /* inquire buttons: pre-fill product in form and scroll */
    $all("[data-inquire]", gridEl).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = D.products[parseInt(btn.getAttribute("data-inquire"), 10)];
        if (p) {
          var sel = $("#fProduct");
          if (sel) sel.value = p.name;
        }
      });
    });
  }

  /* assign ids once */
  D.products.forEach(function (p, i) { p.id = i; });

  /* ---------- modal ---------- */
  var modal = $("#productModal");
  function openModal(p) {
    $("#modalMedia").innerHTML = mediaHTML(p);
    var tags = '<span class="mtag cat">' + esc(p.category) + "</span>" +
      (p.tag ? '<span class="mtag">' + esc(p.tag) + "</span>" : "");
    $("#modalTags").innerHTML = tags;
    $("#modalName").textContent = p.name;
    $("#modalSpec").textContent = p.spec;
    $("#modalDesc").textContent = p.desc;
    $("#modalMoq").textContent = p.moq;
    $("#modalPrice").textContent = p.price;
    $("#modalUnit").textContent = p.unit;

    var subject = "Inquiry: " + p.name;
    var body = "Hello, I'm interested in: " + p.name + "\nSpec: " + p.spec + "\nMOQ: " + p.moq + "\nPrice: " + p.price + " (" + p.unit + ")\n\nPlease send me your best quote.";
    $("#modalWa").href = "https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent(body);
    $("#modalMail").href = "mailto:" + s.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---------- inquiry form ---------- */
  var form = $("#inquiryForm");
  var formResult = $("#formResult");
  var productSelect = $("#fProduct");

  /* populate product select */
  D.products.forEach(function (p) {
    var opt = document.createElement("option");
    opt.value = p.name;
    opt.textContent = p.name + " (" + p.price + ")";
    productSelect.appendChild(opt);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = (fd.get("name") || "").trim();
    var company = (fd.get("company") || "").trim();
    var email = (fd.get("email") || "").trim();
    var country = (fd.get("country") || "").trim();
    var product = (fd.get("product") || "").trim();
    var qty = (fd.get("qty") || "").trim();
    var msg = (fd.get("message") || "").trim();

    if (!name || !email || !msg) {
      toast("Please fill in Name, Email and Message.");
      return;
    }

    var lines = [
      "Hello, I would like to make an inquiry.",
      "Name: " + name,
      "Company: " + (company || "-"),
      "Email: " + email,
      "Country: " + (country || "-"),
      "Product: " + (product || "-"),
      "Quantity: " + (qty || "-"),
      "",
      msg
    ];
    var text = lines.join("\n");
    var subject = "Inquiry from website" + (product ? ": " + product : "");

    $("#resultWa").href = "https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent(text);
    $("#resultMail").href = "mailto:" + s.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);

    form.classList.add("hidden");
    formResult.classList.remove("hidden");
    formResult.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("#resultAgain").addEventListener("click", function () {
    formResult.classList.add("hidden");
    form.classList.remove("hidden");
  });

  /* ---------- counters ---------- */
  var counted = false;
  function runCounters() {
    if (counted) return;
    counted = true;
    $all("[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1400, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    $all(".reveal").forEach(function (el) { io.observe(el); });

    var statsIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCounters(); statsIo.disconnect(); }
      });
    }, { threshold: 0.4 });
    var statsSection = $(".stats");
    if (statsSection) statsIo.observe(statsSection);
  } else {
    $all(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- init ---------- */
  buildFilters();
  renderProducts();
})();