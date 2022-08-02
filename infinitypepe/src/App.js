import { useEffect, useState } from "react";
import ImgBox from "./ImgBox";

// 이미지 검색한 결과를 출력하는 순서
// 1. 위치는 최상위 (props 활용을 위해)
// 2. input 을 통해 사용자로부터 입력값을 받음 (value)
// 3. onsubmit 이벤트 발생 시 API를 불러옴
// 4. API URL 내 value를 통해 검색을 진행
// 5. 검색한 결과를 리턴하여 h1 테그에 전달
// 6. input 안에 있는 내용을 지워버림.

function App() {
  const [word, setWord] = useState("");
  const [search, setSearch] = useState("");
  const [rowData, setRowData] = useState([]);

  const onChange = (event) => setWord(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (word === "") {
      return;
    }
    setSearch(word);
    setWord("");
  };

  useEffect(() => {
    if (search === "") {
      return;
    }

    const URL = `https://dapi.kakao.com/v2/search/image?query=${search}`;
    fetch(URL, {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
    })
      .then(
        (req) =>
          console.log(req)
          req.json()
        // if ((req.ok = true)) {
        //   return req.json();
        // }
      )
      .then((data) => {
        // OBJ => ARR 변경(Objdct.values()) 데이터 다루는 아주 중요한 구문
        setRowData(
          Object.values(data)[0].map((item) => {
            return item.image_url;
          })
        );
      })
      .catch();
  }, [search]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={word}
          type="text"
          placeholder="Search Image~!"
        />
      </form>
      <h2>검색된 이미지가 나와야해</h2>
      <ImgBox imgURLArr={rowData} />
    </div>
  );
}

export default App;
