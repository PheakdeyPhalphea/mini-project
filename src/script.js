function displayProducts(products, containerSelector, imageLink) {
  let container = document.querySelector(containerSelector);
  products.forEach((product) => {
    container.innerHTML += `
      <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ">
        <div class="bg-secondaryColor hover:grow "> 
          <a href="detailProduct.html">
            <img class="bg-secondaryColor" src="${imageLink}${product.thumbnail}">
          </a>
        </div>
        <div class="pt-3 flex items-center justify-between">
        <p class="text-on_card_text">${product.title}</p>
        <svg class="h-6 w-6 fill-current text-AscendColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
        </svg>
      </div>
        <p class="pt-1 text-primaryColor">$${product.price}</p>
      </div>
    `;
  });
}
let result1 = "#collection1";
let result2 = "#collection2";
let result3 = "#collection3";
let result4 = "#collection4";
let result5 = "#collection5";
let imageLink1 = "image/whole-collection/";
let imageLink2 = "image/nike-air-collections/";
let imageLink3 = "image/BasketBall-Collections/";
let imageLink4 = "image/nike-dunk-collections/";
let imageLink5 = "image/running-collections/";
let products1 = [
  {
    title: "Air-Force-1-Hight<br>Men's Shoes",
    price: 130,
    thumbnail: "air-force-1-07-lx-mens-shoes.png ",
  },
  {
    title: "Nike Dunk Low<br>Men's Shoes",
    price: 190,
    thumbnail: "dunk-low-retro-mens-shoes-1xlGBR-removebg-preview.png",
  },
  {
    title: "Nike G.T. Cut 3<br>Basketball Shoes",
    price: 115,
    thumbnail: "second-shoes.png",
  },
  {
    title: "Nike Invincible 3<br>Men's Road Running ",
    price: 180,
    thumbnail: "shoes3.png",
  },
];
let products2 = [
  {
    title: "Air-Force-1<br>Men's Shoes",
    price: 115,
    thumbnail: "shoes1.png ",
  },
  {
    title: "Air-Force-1-Hight<br>Men's Shoes",
    price: 190,
    thumbnail: "shoes2.png",
  },
  {
    title: "Air-Force-1-Low<br>Men's Shoes",
    price: 140,
    thumbnail: "shoes3.png",
  },
  {
    title: "Air-Force-1-Mid<br>Men's Shoes   ",
    price: 140,
    thumbnail: "shoes4.png",
  },
];
let products3 = [
  {
    title: "Air Jordan XXXVIII Low<br>Basketball Shoes",
    price: 175,
    thumbnail: "shoes4.png ",
  },
  {
    title: "Nike G.T. Cut 3<br>Basketball Shoes",
    price: 190,
    thumbnail: "shoes3.png",
  },
  {
    title: "Ja-1-”Bite”<br>Basketball Shoes",
    price: 130,
    thumbnail: "shoes2.png",
  },
  {
    title: "Kd16-”B.A.D”<br>Basketball Shoes",
    price: 180,
    thumbnail: "shoes1.png",
  },
];
let products4 = [
  {
    title: "Custom-Nike-Dunk-High<br>Men's Shoes",
    price: 135,
    thumbnail: "shoes1.png",
  },
  {
    title: "Dunk-Low-Retro<br>Men's Shoes",
    price: 145,
    thumbnail: "shoes2.png",
  },
  {
    title: "Blazer-Mid-77-Vintage<br>Men's Shoes",
    price: 150,
    thumbnail: "shoes3.png",
  },
  {
    title: "Nike Dunk High Retro SE<br>Men's Shoes",
    price: 120,
    thumbnail: "shoes4.png",
  },
];
let products5 = [
  {
    title: "Nike Invincible 3<br>Men's Running Shoes",
    price: 250,
    thumbnail: "shoes1.png",
  },
  {
    title: "Nike Alphafly 2<br>Men's Running Shoes",
    price: 295,
    thumbnail: "shoes2.png",
  },
  {
    title: "Nike Infinity RN 4<br>Men's Running Shoes",
    price: 280,
    thumbnail: "shoes3.png",
  },
  {
    title: "pe gasus-trail-4<br>Men's Running Shoes",
    price: 290,
    thumbnail: "shoes4.png",
  },
];
displayProducts(products1, result1, imageLink1);
displayProducts(products2, result2, imageLink2);
displayProducts(products3, result3, imageLink3);
displayProducts(products4, result4, imageLink4);
displayProducts(products5, result5, imageLink5);
