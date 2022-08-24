import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgBox from "./ImgBox";
import Login from "./Login";

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
  //useEffect(()=>{},[]) 마운트 될때만 한번
  //useEffect(()=>{ retrun () => {unmount}},[]) 마운트 될때만 한번, 언마운트될땐 unmount 한번
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

  return (
    <div className="container">
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
        <ImgBox imgURLArr={rowData} />
      </div>
    </div>
  );
}

export default Main;
