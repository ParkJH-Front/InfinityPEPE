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
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("https://dapi.kakao.com/v2/search/image", {
      headers: {
        Authorization: "17d6f89d24fa2565f0e7155dc37188f0",
      },
      data: {
        query: "pepe",
      },
    })
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  }, []);

  return (
    <div>
      <p>{searchData}</p>
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
