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
  const API = "https://dapi.kakao.com/v2/search/image";
  const [searchData, setSearchData] = useState("");
  const aaa = "11";
  console.log(aaa);

  useEffect(() => {
    fetch(API)
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
