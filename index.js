const menuData = [
  {
    category: "espresso",
    title: "Espresso Delight",
    description: "Kopi pekat dengan aroma kuat yang membangkitkan semangat.",
    price: "Rp 25.000",
    imageUrl: "https://majestycoffee.com/cdn/shop/articles/How_Much_Caffeine_in_Italian_Espresso__A_Quick_Guide_1200x.jpg?v=1694737687",
  },
  {
    category: "latte",
    title: "Creamy Latte",
    description: "Perpaduan espresso dan susu creamy yang lembut.",
    price: "Rp 30.000",
    imageUrl: "https://d1r9hss9q19p18.cloudfront.net/uploads/2020/02/Screen-Shot-2020-02-26-at-4.45.54-PM.png",
  },
  // Tambah lagi sesuai kebutuhan
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const field = el.dataset.bind;
    const index = parseInt(el.closest("[data-id]").dataset.id, 10);
    const data = menuData[index];
    if (!data || !(field in data)) return;

    if (el.tagName === "IMG") {
      el.src = data[field];
      el.alt = data.title || "";
    } else {
      el.textContent = data[field];
    }
  });
});
