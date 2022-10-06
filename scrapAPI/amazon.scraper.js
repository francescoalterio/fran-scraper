export async function getProductsNameBySearch(browser, search) {
  const page = await browser.newPage();
  await page.goto("https://www.amazon.com/-/en");

  await page.type("#twotabsearchtextbox", search);
  await page.click("#nav-search-submit-button");
  await page.waitForSelector(".s-result-item");

  const amazonData = await page.evaluate(() => {
    const $allProductsCard = document.querySelectorAll(
      ".s-result-item div div div div div .s-list-col-right div div .s-title-instructions-style h2 a span"
    );
    const allProductsTitle = [];
    $allProductsCard.forEach((x) => allProductsTitle.push(x.innerText));
    return allProductsTitle;
  });

  return amazonData;
}
