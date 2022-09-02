import { useEffect, useState, Component, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";
import Loding from "../img/Rhombus.gif";

function Main() {
  const [word, setWord] = useState("");
  const [rowData, setRowData] = useState([]);

  const onChange = (event) => setWord(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (word === "") {
      return;
    }
    console.log(word);
    APIHandler(word);
    setWord("");
  };

  const params = useParams().text;
  useEffect(() => {
    APIHandler(params);
  }, []);

  function APIHandler(word) {
    let URL = `https://dapi.kakao.com/v2/search/image?query=${word}`;
    fetch(URL, {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
    })
      .then((req) => req.json())
      .then((data) => {
        setRowData(
          Object.values(data)[0].map((item) => {
            return item.image_url;
          })
        );
      });
  }

  const ImgBox = lazy(() => {
    return Promise.all([
      import("./ImgBox"),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]).then(([moduleExports]) => moduleExports);
  });

  return (
    <div>
      <Login />
      <div className="imgContainer">
        <form onSubmit={onSubmit} value={word}>
          <input
            className="input_main"
            onChange={onChange}
            value={word}
            type="text"
          />
          <button className="btn_main">찾기</button>
        </form>
        <h1>찾은 이미지</h1>
        <Suspense fallback={<img src={Loding} alt="loding" />}>
          <ImgBox imgURLArr={rowData} />
        </Suspense>
      </div>
    </div>
  );
}

export default Main;
