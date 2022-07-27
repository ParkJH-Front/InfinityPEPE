import { useEffect, useState } from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="menu">
        <p>네비박스</p>
      </nav>
    </div>
  );
}

function Content() {
  return (
    <div>
      <div className="contants">
        <p>컨텐츠박스</p>
      </div>
    </div>
  );
}

// url = "https://dapi.kakao.com/v2/search/image"
// headers = {
//     "Authorization" : "KakaoAK <REST_API 앱키를 입력하세요>"
// }
// data = {
//   "query" : "펭수"
// }

function PepeRander() {
  // const API = "https://dapi.kakao.com/v2/search/image";
  const [searchData, setSearchData] = useState([]);
  const [btn, setBtn] = useState("");
  let counter = 1;
  const query = "pepe";
  const onClick = () => setBtn((counter = counter + 1));

  useEffect(() => {
    fetch("https://dapi.kakao.com/v2/search/web", {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
      query: String(query),
      // sort: "accuracy", accuracy(정확도순) 또는 recency(최신순)
      // page: 1, 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      // size: 5, 한 페이지에 보여질 문서 수, 1~80 사이의 값, 기본 값 80
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(String(query));
        setSearchData(data);
      });
  }, [btn]);

  console.log(searchData);

  return (
    <div>
      <button onClick={onClick}>fucking KAKAO</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Nav />
      <Content />
      <PepeRander />
    </div>
  );
}
export default App;
