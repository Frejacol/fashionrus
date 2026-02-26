const categoryContainer = document.querySelector("#categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<a class="categories" href="produkter.html">${category.category}</a>`;
    });
  });
