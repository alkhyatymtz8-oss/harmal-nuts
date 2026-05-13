function goToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

const products = [
  {
    name: "زعقة",
    price: "800",
    image: "zaaqa.jpg"
  },
  {
    name: "قرع",
    price: "2100",
    image: "qara.jpg"
  },
  {
    name: "دوار الشمس",
    price: "1300",
    image: "doar.jpg"
  },
  {
    name: "حب العزيز عادي",
    price: "900",
    image: "hbazez.jpg"
  },
  {
    name: "حب العزيز أحمر",
    price: "1200",
    image: "ahmer.jpg"
  },
  
    {
    name: "كاجو",
    price: "5800",
    image: "kajo.jpg"
  },
    {
    name: " لوز أسترالي",
    price: "5800",
    image: "loz.jpg"
  },

    {
    name: "لوز افغاني",
    price: "5800",
    image: "looz.jpg"
  },

    {
    name: " حبيبات اللوتس",
    price: "2000",
    image: "lots.jpg"
  },

    {
    name: "حبيبات",
    price: "2000",
    image: "hbebat.jpg"
  },
    {
    name: "بيوقلز",
    price: "900",
    image: "biuglz.jpg"
  }
  
];

const container = document.getElementById("products");

// عرض المنتجات
products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <img src="${product.image}" width="150">
      <h3>${product.name}</h3>
      <p>${product.price} ريال</p>
      <a href="https://wa.me/967773000738?text=مرحبا اريد طلب ${product.name}" target="_blank">
        اطلب الآن
      </a>
    </div>
  `;
});

window.onscroll = function () {
  document.getElementById("topBtn").style.display =
    window.scrollY > 200 ? "block" : "none";
};

document.getElementById("topBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
