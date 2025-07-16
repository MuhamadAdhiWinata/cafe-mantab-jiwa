const menuData = [
  // Espresso
  {
    category: "espresso",
    title: "Espresso Delight",
    description: "Kopi pekat dengan aroma kuat yang membangkitkan semangat.",
    price: "Rp 25.000",
    imageUrl: "https://majestycoffee.com/cdn/shop/articles/How_Much_Caffeine_in_Italian_Espresso__A_Quick_Guide_1200x.jpg?v=1694737687",
  },
  {
    category: "espresso",
    title: "Double Shot Espresso",
    description: "Dua kali lebih kuat untuk energi ekstra.",
    price: "Rp 30.000",
    imageUrl: "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544993.jpg",
  },

  // Latte
  {
    category: "latte",
    title: "Creamy Latte",
    description: "Perpaduan espresso dan susu creamy yang lembut.",
    price: "Rp 30.000",
    imageUrl: "https://d1r9hss9q19p18.cloudfront.net/uploads/2020/02/Screen-Shot-2020-02-26-at-4.45.54-PM.png",
  },
  {
    category: "latte",
    title: "Vanilla Latte",
    description: "Latte dengan ekstrak vanilla manis yang menggoda.",
    price: "Rp 35.000",
    imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Vanilla-Latte-006.jpg",
  },

  // Cappuccino
  {
    category: "cappuccino",
    title: "Classic Cappuccino",
    description: "Espresso, susu steamed, dan busa susu yang seimbang.",
    price: "Rp 32.000",
    imageUrl: "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Cappuccino.jpg",
  },
  {
    category: "cappuccino",
    title: "Caramel Cappuccino",
    description: "Cappuccino dengan saus karamel yang lumer.",
    price: "Rp 38.000",
    imageUrl: "https://coffeeaffection.com/wp-content/uploads/2023/02/how-to-make-a-caramel-cappuccino.jpg",
  },

  // Cold Brew
  {
    category: "cold brew",
    title: "Iced Cold Brew",
    description: "Dibuat dengan proses seduh dingin 24 jam, rendah asam.",
    price: "Rp 40.000",
    imageUrl: "https://www.starbucks.com/assets/4e321c0d0c1a4ab6b316b0b33e3a7fc2.jpg",
  },
  {
    category: "cold brew",
    title: "Cold Brew Coconut",
    description: "Cold brew dengan sentuhan santai kelapa tropis.",
    price: "Rp 45.000",
    imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Coconut-Cold-Brew-006.jpg",
  },

  // Signature Drinks
  {
    category: "signature",
    title: "Affogato",
    description: "Espresso disiram di atas es krim vanilla, sajian penutup kopi.",
    price: "Rp 50.000",
    imageUrl: "https://www.sipandfeast.com/wp-content/uploads/2022/08/affogato-recipe-snippet.jpg",
  },
  {
    category: "signature",
    title: "Matcha Espresso Fusion",
    description: "Perpaduan matcha dan espresso yang unik.",
    price: "Rp 45.000",
    imageUrl: "https://www.alphafoodie.com/wp-content/uploads/2021/03/Matcha-Espresso-Fusion-1-of-1.jpeg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");

  // 1. Buat card untuk setiap data
  menuData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md overflow-hidden card-3d-effect";
    card.dataset.id = index; // Set data-id sesuai index array

    card.innerHTML = `
      <div class="card-3d-inner hover-lift">
        <img class="w-full h-48 object-cover" data-bind="imageUrl" loading="lazy" />
        <div class="p-6">
          <h3 class="font-bold text-xl mb-2 text-gray-900" data-bind="title"></h3>
          <p class="text-gray-600 text-sm mb-4" data-bind="description"></p>
          <span class="text-green-600 font-bold text-lg" data-bind="price"></span>
        </div>
      </div>
    `;

    menuContainer.appendChild(card);
  });

  // 2. Binding data ke semua card
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const field = el.dataset.bind; // "imageUrl", "title", dll
    const card = el.closest("[data-id]");
    const index = parseInt(card.dataset.id, 10);
    const data = menuData[index];

    if (!data || !data[field]) return;

    // Isi data
    if (el.tagName === "IMG") {
      el.src = data[field];
      el.alt = data.title || "";
    } else {
      el.textContent = data[field];
    }
  });
});
