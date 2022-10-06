export function getProductsData() {
  const allDataProducts = [];

  const allProducts = document.querySelectorAll("[data-content=productItem]");

  allProducts.forEach((x) => {
    if (x.children.length > 1) {
      const productChildrens = x.children;
      const productURL = productChildrens[0].children[0].href;
      const productTitle =
        productChildrens[1].children[0].children[0].children[0].children[1]
          .innerText;

      const priceBox = productChildrens[1].children[0].children[3];

      console.log(priceBox);

      const price =
        priceBox.children.length === 3
          ? priceBox.children[0].children[0].innerText
          : priceBox.children.length === 2
          ? priceBox.children[0].children[0].innerText
          : priceBox.children[0].children.length === 2
          ? priceBox.children[0].children[0].children[0].innerText
          : priceBox.children[0].children[0].children[0].innerText;
      const pieces =
        priceBox.children.length === 3
          ? priceBox.children[2].children[0].innerText
          : priceBox.children.length === 2
          ? priceBox.children[1].children[0].innerText
          : priceBox.children[0].children.length === 2
          ? priceBox.children[0].children[1].children[0].innerText
          : priceBox.children[0].children[2].children[0].innerText;

      allDataProducts.push({
        productURL,
        productTitle,
        price,
        pieces,
      });
    }
  });

  return allDataProducts;
}
