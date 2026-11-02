/* ============================================================
 *  网站数据文件 —— 日常改内容只需要编辑这个文件
 *
 *  Jinshun Barcode（锦顺条码）
 *  说明：
 *  1. 网站界面是英文的（给海外客户看），中文只用于给你注释。
 *  2. 改完保存后，刷新网页即可看到新内容。
 *  3. 想加产品：复制一个 products 里的 {...} 段，改内容即可。
 *  4. 产品价格均为参考价，正式报价以供应商确认为准。
 * ============================================================ */

window.STORE = {

  /* ---------- 1. 基本资料 ---------- */
  site: {
    brand: "Jinshun Barcode",                       // 公司全称（用于页脚版权）
    shortName: "Jinshun",                           // 品牌简称（导航栏显示）
    slogan: "Barcode & Labeling Solutions from Guangzhou", // 标语
    email: "mengxufeng@bestten.cn",                 // 联系邮箱
    whatsapp: "8618820031841",                      // WhatsApp（国家代码+手机号，无 + 和空格）
    wechat: "18820031841",                          // 微信号
    address: "No. 5, East Side of Yuepu Industrial Park, Xiangshan Avenue, Ningxi Street, Zengcheng District, Guangzhou, Guangdong, China" // 地址
  },

  /* ---------- 2. 产品分类（可增删） ---------- */
  categories: ["Barcode Printers", "Barcode Scanners", "Labels & Consumables"],

  /* ---------- 3. 产品列表 ----------
   * 字段说明：
   *   name     : 产品英文名
   *   category : 所属分类（必须和上面 categories 里的一致）
   *   tag      : 角标，如 "Hot" / "New"；不需要就留空 ""
   *   spec     : 一行卖点（简短）
   *   desc     : 详细描述
   *   moq      : 起订量
   *   price    : 参考价（正式报价以供应商确认为准）
   *   unit     : 价格条款
   *   image    : 产品图片，填 images/products/ 里的文件名，如 "printer.jpg"
   *              没有真实图片就留空 ""，会自动显示占位图
   *   icon     : 占位图图标（emoji）
   *   color    : 占位图背景色
   */
  products: [
    /* ===== 条码打印机 ===== */
    {
      name: "Desktop Thermal Label Printer 4-inch",
      category: "Barcode Printers",
      tag: "Hot",
      spec: "203 dpi · USB · 4 ips · 4-inch labels",
      desc: "Compact desktop thermal label printer for shipping labels, barcodes and product tags. 203 dpi print head, up to 4 inches per second, USB connection. OEM logo and custom packaging available.",
      moq: "5 pcs",
      price: "$89.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🖨️",
      color: "#4f46e5"
    },
    {
      name: "Industrial Thermal Transfer Printer 300 dpi",
      category: "Barcode Printers",
      tag: "",
      spec: "300 dpi · metal body · 6 ips · USB/Ethernet",
      desc: "Heavy-duty industrial thermal transfer printer for high-volume barcode and label production. Metal housing, 300 dpi resolution, USB and Ethernet interfaces, supports wax, wax-resin and resin ribbons.",
      moq: "2 pcs",
      price: "$399.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🏭",
      color: "#0ea5e9"
    },
    {
      name: "Portable Bluetooth Label Printer 2-inch",
      category: "Barcode Printers",
      tag: "New",
      spec: "2-inch · Bluetooth · rechargeable · iOS/Android",
      desc: "Pocket-size Bluetooth label printer for mobile printing of price tags, shipping labels and receipts. Connects to iOS and Android apps, built-in rechargeable battery, ideal for retail and logistics.",
      moq: "10 pcs",
      price: "$58.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "📱",
      color: "#16a34a"
    },
    {
      name: "High-Speed Shipping Label Printer 4-inch",
      category: "Barcode Printers",
      tag: "",
      spec: "4-inch · 8 ips · USB + Ethernet · 203 dpi",
      desc: "High-speed desktop label printer designed for e-commerce and warehouse shipping operations. Up to 8 inches per second, USB and Ethernet connections, supports 4x6 shipping labels.",
      moq: "5 pcs",
      price: "$129.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🚚",
      color: "#f59e0b"
    },

    /* ===== 条码扫描器 ===== */
    {
      name: "Handheld 1D/2D USB Barcode Scanner",
      category: "Barcode Scanners",
      tag: "Hot",
      spec: "1D/2D · USB plug-and-play · stand included",
      desc: "Plug-and-play handheld barcode scanner for retail, warehouse and office use. Reads 1D and 2D codes from paper and screens, USB connection, adjustable stand included.",
      moq: "10 pcs",
      price: "$25.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "📷",
      color: "#ec4899"
    },
    {
      name: "Wireless 2D Barcode Scanner with Charging Stand",
      category: "Barcode Scanners",
      tag: "",
      spec: "2.4G wireless · charging stand · 1D/2D",
      desc: "Wireless barcode scanner with charging stand for flexible checkout and stocktaking. 2.4G wireless connection, long standby time, reads 1D and 2D barcodes, suitable for retail and logistics.",
      moq: "10 pcs",
      price: "$45.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "📡",
      color: "#8b5cf6"
    },
    {
      name: "Industrial Rugged Handheld Scanner IP65",
      category: "Barcode Scanners",
      tag: "",
      spec: "IP65 · 1D/2D · drop-resistant · USB/RS232",
      desc: "Rugged industrial handheld scanner with IP65 protection and drop-resistant housing. Built for warehouse, manufacturing and outdoor environments. USB and RS232 interfaces available.",
      moq: "5 pcs",
      price: "$179.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🛠️",
      color: "#14b8a6"
    },
    {
      name: "Fixed-Mount 2D Scanner for Conveyor Lines",
      category: "Barcode Scanners",
      tag: "New",
      spec: "Fixed mount · 1D/2D · high-speed reading",
      desc: "Fixed-mount 2D imaging scanner for conveyor lines, sorting systems and automated production. High-speed reading, multiple interfaces, adjustable mounting bracket available.",
      moq: "5 pcs",
      price: "$199.00",
      unit: "FOB Guangzhou",
      image: "",
      icon: "⚙️",
      color: "#6366f1"
    },

    /* ===== 标签与耗材 ===== */
    {
      name: "Direct Thermal Label Rolls 4 x 6 inch",
      category: "Labels & Consumables",
      tag: "Hot",
      spec: "4 x 6 inch · direct thermal · 500 labels/roll",
      desc: "Direct thermal label rolls for shipping and barcode printing. 4 x 6 inch, 500 labels per roll, strong adhesive, compatible with common desktop thermal printers.",
      moq: "100 rolls",
      price: "$0.85",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🏷️",
      color: "#ea580c"
    },
    {
      name: "Thermal Transfer Wax Ribbon",
      category: "Labels & Consumables",
      tag: "",
      spec: "Wax · 110mm x 300m · black",
      desc: "Wax thermal transfer ribbon for paper labels and barcode printing. 110mm x 300m, high transfer density and clear print quality. Wax-resin and resin options available.",
      moq: "50 rolls",
      price: "$2.80",
      unit: "FOB Guangzhou",
      image: "",
      icon: "🎞️",
      color: "#0ea5e9"
    },
    {
      name: "Custom Pre-Printed Barcode Labels",
      category: "Labels & Consumables",
      tag: "",
      spec: "Custom size · barcode/QR printing · strong adhesive",
      desc: "Custom pre-printed barcode and QR code labels with your size, material and artwork. Suitable for retail, logistics and product traceability. Artwork proof provided before production.",
      moq: "10,000 pcs",
      price: "$0.03",
      unit: "FOB Guangzhou",
      image: "",
      icon: "📦",
      color: "#16a34a"
    },
    {
      name: "UHF RFID Label Inlays",
      category: "Labels & Consumables",
      tag: "New",
      spec: "UHF RFID · 860-960 MHz · printable · 5,000 pcs",
      desc: "UHF RFID label inlays for inventory, asset tracking and warehouse management. 860-960 MHz frequency, printable surface, available in different antenna designs.",
      moq: "5,000 pcs",
      price: "$0.09",
      unit: "FOB Guangzhou",
      image: "",
      icon: "📶",
      color: "#8b5cf6"
    }
  ]
};