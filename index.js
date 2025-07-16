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
    imageUrl:
      "https://www.scurolavino.com/~img/~blog/2022/6/29/n7x4eeg3yhvkhxztj0dndtbl1yketwgmt5rdt7ycmywuirhwmsyj0orvhs3_2l58ey6wgw1sdyt8mlf7qoh48bv6sifbanwjey5aaggxhjyct58qbt_kopzjjazjfsizzkpxvuj1f_qza4cxr2htbjehbym_cxejnxunmpq_m3qqoarpxmzhztp3d0zxmrldwaymzxs4gewaq9ds3-ed78-3484_804-t598_25.webp",
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
    imageUrl: "https://asset.kompas.com/crops/qrMdn51W_jmoyXVj4kLXpBXZ6t0=/0x0:0x0/1200x800/data/photo/2020/04/16/5e986b693a892.jpeg",
  },

  // Cappuccino
  {
    category: "cappuccino",
    title: "Classic Cappuccino",
    description: "Espresso, susu steamed, dan busa susu yang seimbang.",
    price: "Rp 32.000",
    imageUrl: "https://cdn.shopify.com/s/files/1/0093/2537/9669/files/shutterstock_1037995357_2048x2048.jpg?v=1593037563",
  },
  {
    category: "cappuccino",
    title: "Caramel Cappuccino",
    description: "Cappuccino dengan saus karamel yang lumer.",
    price: "Rp 38.000",
    imageUrl: "https://i.pinimg.com/736x/da/aa/81/daaa814611e387f1cd6ff89a95689074.jpg",
  },

  // Cold Brew
  {
    category: "cold brew",
    title: "Iced Cold Brew",
    description: "Dibuat dengan proses seduh dingin 24 jam, rendah asam.",
    price: "Rp 40.000",
    imageUrl: "https://cdn.shopify.com/s/files/1/0611/2057/7587/files/blog-ineffablecoffee-roasters-cafe-cold-brew-01.jpg?v=1742545416",
  },
  {
    category: "cold brew",
    title: "Cold Brew Coconut",
    description: "Cold brew dengan sentuhan santai kelapa tropis.",
    price: "Rp 45.000",
    imageUrl: "https://fedandfit.com/wp-content/uploads/2022/02/230322_how-to-make-cold-brew-38-660x990.jpg",
  },

  // Signature Drinks
  {
    category: "signature",
    title: "Affogato",
    description: "Espresso disiram di atas es krim vanilla, sajian penutup kopi.",
    price: "Rp 50.000",
    imageUrl: "https://www-recipetineats-com.translate.goog/tachyon/2023/06/Affogato_0.jpg?resize=900,1125&zoom=0.72&_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=imgs",
  },
  {
    category: "signature",
    title: "Matcha Espresso Fusion",
    description: "Perpaduan matcha dan espresso yang unik.",
    price: "Rp 45.000",
    imageUrl:
      "https://scontent.fjog14-1.fna.fbcdn.net/v/t39.30808-6/475633603_2207865652949666_6982383068205098328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeFjSbkhlZ77eCsrOo-kF7HM-t3tehk27jD63e16GTbuMOlrhop3zStLOX1VR9_7BnLniqN9UVbmXWHlH2SF80A8&_nc_ohc=VJWHSVEautYQ7kNvwF_TDgB&_nc_oc=AdlpafRenrFkQ9mKpHfsYhzkb4bnIxKjA483dyYVNZEFsMQU8q4MPjLCUWGyxtbbr9w&_nc_zt=23&_nc_ht=scontent.fjog14-1.fna&_nc_gid=exjgacZqW_Pa-V-pPKShIw&oh=00_AfRlgG5rvW8dCmRJvQINHIxyfiP_5uAg-WK9ycZ-R7aQiQ&oe=687CD8F4",
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
