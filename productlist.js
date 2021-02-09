const url = "https://kea-alt-del.dk/t7/api/products";

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
  console.log(product);
  //grab the template
  const template = document.querySelector("#smallProduct").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("h3").textContent = product.productdisplayname;
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
    "Now " + product.price / product.discount;

  /*
<article class="smallProduct">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/1000/1531.webp"
          alt="Grey Solid Round Neck T-Shirt"
        />
        <h3>Grey Solid Round Neck T-Shirt</h3>
        <p class="price">DKK 799,-</p>
        <div class="box2">
        <a href="product.html">More Details</a>
        </div>
      </article>
*/
  //find the daddy
  const parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}
