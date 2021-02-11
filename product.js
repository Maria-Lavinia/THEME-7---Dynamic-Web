const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");
console.log("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .season").textContent = product.season;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
  document.querySelector("dt").textContent = product.productdisplayname;
  document.querySelector(".price").textContent =
    product.price + ",-" + " incl VAT";
  document.querySelector(".purchaseBox p").textContent =
    product.articletype + " | " + product.brandname;
    document.querySelector(".discounted p").textContent =
    "Now " + "ONLY " +
    Math.round((product.price / 100) * product.discount * 100) / 100 +
    " ,-" + " incl VAT";
if (product.soldout) {
  document.querySelector("article").classList.add("soldOut");
}
if (product.discount) {
  document.querySelector("article").classList.add("onSale");
}
}