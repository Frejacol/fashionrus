"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <img class="productimg" src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="" />
        <div class="info">
          <h2>Product Information</h2>
          <br />
          <h3>Model name</h3>
          <p>${data.variantname}</p>
          <h3>Color</h3>
          <p>${data.basecolour}</p>
          <h3>Inventory number</h3>
          <p>${id}</p>
          <br />
          <h2>${data.brandname}</h2>
          <p>${data.brandbio}</p>
        </div>
        <div class="sidebar">
          <h2>${data.variantname}</h2>
          <br />
          <p>${data.articletype} | ${data.brandname}</p>
          <br />
          <p><strong>DKK ${data.price},-</strong></p>
          <br />
          <label for="size-select">Choose a size</label>
          <select id="size-select" name="size">
            <option value="xs">XS</option>
            <option value="s" selected>S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <br />
          <button>Add to basket</button>
        </div>
        `;
  });
