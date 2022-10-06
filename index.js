import express from "express";
import puppeteer from "puppeteer";
import { getAllDataProductsAlibaba } from "./scrapAPI/alibaba/alibaba.scraper.js";

const PORT = process.env.PORT || 3300;

const app = express();

app.get("/:search", (req, res) => {
  async function getAllData() {
    const browser = await puppeteer.launch();

    const alibabaData = await getAllDataProductsAlibaba(
      browser,
      req.params.search
    );
    res.json(alibabaData);
  }
  getAllData();

  return;
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
