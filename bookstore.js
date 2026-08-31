const bookdata = [
  {
    image:
      "https://tse4.mm.bing.net/th/id/OIP.MLtcH8FkOIknJXDeMPkq_gHaIK?r=0&pid=Api&P=0&h=180",
    price: 425,
  },
  {
    image:
      "https://cdn.lisaangel.co.uk/image/cache/data/product-images/aw22/ks/the-little-book-of-cats-4x3a6702-900x900.jpeg",
    price: 350,
  },
  {
    image:
      "https://tse3.mm.bing.net/th/id/OIP.6XD06JttFZw-qYNNNexjfgHaI0?r=0&pid=Api&P=0&h=180",
    price: 500,
  },
];

const book = (i) => {
  const div = document.createElement("div");
  div.setAttribute("class", "book");

  const image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("width", "100px");
  image.setAttribute("height", "100px");

  const h2 = document.createElement("h2");
  h2.innerText = `Price: ₹${i.price}`;

  const bt = document.createElement("button");
  bt.innerText = "Add Cart";

  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);

  return div;
};

const bookstore = bookdata.map((i) => book(i));

const parent = document.getElementById("bookstore");

for (const i of bookstore) {
  parent.appendChild(i);
}