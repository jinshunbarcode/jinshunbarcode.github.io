/* ============================================================
 *  网站数据文件 —— 日常改内容只需要编辑这个文件
 *
 *  说明：
 *  1. 网站界面是英文的（给海外客户看），中文只用于给你注释。
 *  2. 改完保存后，刷新网页即可看到新内容。
 *  3. 想加产品：复制一个 products 里的 {...} 段，改内容即可。
 *  4. 这批产品是"轻小件爆款"：又轻又小、运费低、单价低，
 *     特别适合 2000 元无库存起步（订单来了再采购，不压货）。
 * ============================================================ */

window.STORE = {

  /* ---------- 1. 基本资料（改成你自己的） ---------- */
  site: {
    brand: "GlobalLink Trading Co., Ltd.",        // 公司全称（用于页脚）
    shortName: "GlobalLink",                      // 品牌简称（导航栏显示）
    slogan: "Your Trusted Global Sourcing Partner", // 标语
    email: "mengxufeng@bestten.cn",               // 你的联系邮箱（海外客户发邮件用）
    whatsapp: "8618820031841",                    // 你的 WhatsApp 号码（国家代码+手机号，不要加 + 号和空格）
    wechat: "18820031841",                     // 你的微信号
    address: "No. 5, East Side of Yuepu Industrial Park, Xiangshan Avenue, Ningxi Street, Zengcheng District, Guangzhou City, Building 01, Guangdong, China", // 地址
    since: "2015"                                 // 公司成立年份（用于 "Established in"）
  },

  /* ---------- 2. 产品分类（可增删） ---------- */
  categories: ["Pet Supplies", "Home & Kitchen", "Travel & Outdoor"],

  /* ---------- 3. 产品列表 ----------
   * 字段说明：
   *   name     : 产品英文名
   *   category : 所属分类（必须和上面 categories 里的一致）
   *   tag      : 角标，如 "Hot" / "New"；不需要就留空 ""
   *   spec     : 一行卖点（简短）
   *   desc     : 详细描述
   *   moq      : 起订量（无库存模式建议写 5-50，别写太高）
   *   price    : 参考价
   *   unit     : 价格条款，如 "FOB Shenzhen"
   *   image    : 产品图片，填 images/products/ 里的文件名，如 "slowfeeder.jpg"；
   *              没有真实图片就留空 ""，会自动显示占位图
   *   icon     : 占位图图标（emoji），可随便改
   *   color    : 占位图背景色
   */
  products: [
    /* ===== 宠物用品 ===== */
    {
      name: "Dog Slow Feeder Bowl",
      category: "Pet Supplies",
      tag: "Hot",
      spec: "Anti-gulping · non-slip base · dishwasher safe",
      desc: "Helps dogs eat slower to aid digestion. Made of food-grade, BPA-free silicone with a non-slip base. Custom colors and logo available.",
      moq: "10 pcs",
      price: "$6.50",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🐶",
      color: "#f97316"
    },
    {
      name: "Pet Grooming Glove",
      category: "Pet Supplies",
      tag: "",
      spec: "Removes loose fur · massages skin · reusable",
      desc: "Two-in-one grooming and massage glove that removes loose fur while petting. Easy to clean and reusable, suitable for cats and dogs.",
      moq: "20 pcs",
      price: "$3.80",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🧤",
      color: "#14b8a6"
    },
    {
      name: "Pet Nail Clippers",
      category: "Pet Supplies",
      tag: "",
      spec: "Safety guard · stainless blade · non-slip grip",
      desc: "Stainless steel nail clippers with a safety guard to avoid over-cutting. Comfortable non-slip handle for easy home grooming.",
      moq: "20 pcs",
      price: "$2.90",
      unit: "FOB Shenzhen",
      image: "",
      icon: "✂️",
      color: "#6366f1"
    },
    {
      name: "Dog Training Clicker",
      category: "Pet Supplies",
      tag: "",
      spec: "Adjustable sound · wrist strap · lightweight",
      desc: "Compact clicker for dog training and positive reinforcement. Comes with a wrist strap, perfect for beginners and professionals.",
      moq: "50 pcs",
      price: "$1.50",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🦴",
      color: "#8b5cf6"
    },

    /* ===== 家居厨房 ===== */
    {
      name: "Silicone Stretch Lids Set (6 pcs)",
      category: "Home & Kitchen",
      tag: "Hot",
      spec: "Food-grade silicone · leak-resistant · 6 sizes",
      desc: "Reusable stretch lids that fit bowls, cans and containers of different sizes. Food-grade, BPA-free silicone, dishwasher safe.",
      moq: "10 pcs",
      price: "$5.90",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🍽️",
      color: "#0ea5e9"
    },
    {
      name: "Silicone Garlic Peeler Roller",
      category: "Home & Kitchen",
      tag: "New",
      spec: "Peels garlic in seconds · dishwasher safe",
      desc: "Viral kitchen gadget that peels garlic cloves in seconds by rolling. Food-grade silicone, easy to clean, great stocking stuffer.",
      moq: "50 pcs",
      price: "$1.80",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🧄",
      color: "#ec4899"
    },
    {
      name: "Air Fryer Silicone Liners (5 pcs)",
      category: "Home & Kitchen",
      tag: "",
      spec: "Reusable · non-stick · easy to clean",
      desc: "Reusable silicone liners that keep air fryers clean and food non-stick. Set of 5, food-grade material, dishwasher safe.",
      moq: "10 pcs",
      price: "$4.20",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🥘",
      color: "#f59e0b"
    },
    {
      name: "Reusable Mesh Produce Bags (10 pcs)",
      category: "Home & Kitchen",
      tag: "",
      spec: "Eco-friendly · washable · drawstring closure",
      desc: "Set of 10 reusable mesh bags for fruits, vegetables and bulk shopping. Washable, lightweight with drawstring closure and labels.",
      moq: "10 pcs",
      price: "$4.50",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🛍️",
      color: "#16a34a"
    },

    /* ===== 旅行户外 ===== */
    {
      name: "Travel Packing Cubes Set (6 pcs)",
      category: "Travel & Outdoor",
      tag: "",
      spec: "Organize luggage · lightweight · mesh see-through",
      desc: "Set of 6 packing cubes in different sizes to keep luggage tidy. Lightweight nylon with see-through mesh tops and sturdy zippers.",
      moq: "5 pcs",
      price: "$7.90",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🧳",
      color: "#4f46e5"
    },
    {
      name: "Microfiber Cooling Towel",
      category: "Travel & Outdoor",
      tag: "Hot",
      spec: "Cools instantly · no chemicals · reusable",
      desc: "Instant cooling towel for sports, gym and outdoor use. Just wet, wring and snap - stays cool for hours. No chemicals, reusable.",
      moq: "20 pcs",
      price: "$3.50",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🧊",
      color: "#06b6d4"
    },
    {
      name: "Resistance Bands Set (5 Levels)",
      category: "Travel & Outdoor",
      tag: "",
      spec: "5 resistance levels · carry bag · home fitness",
      desc: "Set of 5 resistance bands with different strengths plus a carry bag. Great for home workouts, yoga and travel fitness.",
      moq: "10 pcs",
      price: "$4.90",
      unit: "FOB Shenzhen",
      image: "",
      icon: "💪",
      color: "#ef4444"
    },
    {
      name: "Air-Activated Hand Warmers (10 pcs)",
      category: "Travel & Outdoor",
      tag: "New",
      spec: "Lasts 10+ hours · single use · safe",
      desc: "Disposable hand warmers that heat up when opened and last over 10 hours. Ideal for winter outdoor activities, travel and gifts.",
      moq: "20 pcs",
      price: "$2.50",
      unit: "FOB Shenzhen",
      image: "",
      icon: "🔥",
      color: "#ea580c"
    }
  ]
};
