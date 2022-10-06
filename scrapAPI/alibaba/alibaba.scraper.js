import { getProductsData } from "./getProductsData.js";

const URL =
  "https://www.alibaba.com/?src=sem_ggl&from=sem_ggl&cmpgn=9922923049&adgrp=97780320702&fditm=&tgt=aud-806308081856:kwd-784652173659&locintrst=&locphyscl=1028565&mtchtyp=e&ntwrk=g&device=c&dvcmdl=&creative=605958963524&plcmnt=&plcmntcat=&p1=&p2=&aceid=&position=&localKeyword=%27alibaba%27&gclid=Cj0KCQjw-fmZBhDtARIsAH6H8qgJE8fmLgk80QbS3M0p5HE2j7JMdWg54OtwFoiIM-BpbpWkMe-9O_0aAi-BEALw_wcB";

export async function getAllDataProductsAlibaba(browser, search) {
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(URL);

  await page.type(".ui-searchbar-keyword", search);
  await page.click(".ui-searchbar-submit");
  await page.waitForSelector(".ui2-icon-listview", { timeout: 0 });
  await page.click(".ui2-icon-listview");
  await page.waitForSelector("[data-content=productItem]", { timeout: 0 });
  await page.screenshot({ path: "erwe.jpg" });
  const allProductsData = await page.evaluate(getProductsData);

  /*const allDataProducts = [];

  for (let url of allURLS) {
    console.log(url);
    await page.goto(url);
    await page.waitForSelector("h1", { timeout: 0 });
    await page.waitForSelector(".product-price", { timeout: 0 });
    const productData = await page.evaluate(() => {
      const productTitle = document.querySelector("h1").innerText;
      const $priceRange = document.querySelector(".price-range");
      if ($priceRange) {
        return {
          productTitle,
          prices: $priceRange.innerText,
        };
      } else {
        const $prices = document.querySelectorAll(".price-item");
        const prices = [];
        $prices.forEach((x) => {
          const pieces = x.children[0].innerText;
          const price = x.children[1].children[0].innerText;

          prices.push({ pieces, price });
        });
        return {
          productTitle,
          prices,
        };
      }
    });

    allDataProducts.push(productData);
  }*/

  await browser.close();
  return allProductsData;
}
