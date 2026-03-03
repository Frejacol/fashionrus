"use strict";

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector("#productlist");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`).then((response) =>
  response.json().then((data) => {
    showProducts(data);
  }),
);

function showProducts(productsarr) {
  productContainer.innerHTML = `<h2 class="apparel">${category}</h2>`;
  productsarr.forEach((product) => {
    productContainer.innerHTML += `<div class="card">
          <div class="grid_1">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
            <p class="sold">SOLD OUT</p>
          </div>
          <h3>${product.productdisplayname}</h3>
          <p class="grey">${product.articletype} | ${product.brandname}</p>
          <div class="grid_1-1">
            <div>
              <p>prev. DKK ${product.price},-</p>
              <p>now DKK ${Math.round(product.price * (1 - product.discount / 100))},-</p>
              <a href="produktinfo.html?id=${product.id}">Read More</a>
            </div>
            <p class="discount">${product.discount}%</p>
          </div>
        </div>`;
  });
}
