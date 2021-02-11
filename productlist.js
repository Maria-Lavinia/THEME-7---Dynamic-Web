const urlParams = new URLSearchParams(window.location.search);

const season = urlParams.get("season");
console.log(season);
document.querySelector("h2").textContent = season + " Season";
const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  // console.log(data)
  data.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //grab the template

  const template = document.querySelector("#smallProduct").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(".price").textContent = "DKK " + product.price + " ,-";
  copy.querySelector(".discounted p:nth-child(2)").textContent =
    product.discount + "%";
  copy.querySelector(".discounted p").textContent =
    "Now " +
    Math.round((product.price / 100) * product.discount * 100) / 100 +
    " ,-";
  copy.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img.productimage").alt = product.productdisplayname;

  //find the daddy
  const parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}
