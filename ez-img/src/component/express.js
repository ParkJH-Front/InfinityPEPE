const express = require("express");
const app = express();

function go(item) {
  app.get("/", (req, res) => {
    res.send(item);
  });
}

APIHandler("나연");

function APIHandler(keyword) {
  let URL = `https://dapi.kakao.com/v2/search/image?query=${keyword}`;
  fetch(URL, {
    headers: {
      Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      go(
        Object.values(json)[0].map((item) => {
          return item;
        })
      );
    });
}

app.listen(3001, () => console.log("express..."));
