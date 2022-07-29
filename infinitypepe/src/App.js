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
  const [word, setWord] = useState("pepe");
  const [search, setSearch] = useState("pepe");
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
    console.log(search);
    if (search === "") {
      return;
    }

    const URL = `https://dapi.kakao.com/v2/search/image?query=${search}`;
    fetch(URL, {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
    })
      .then((req) => req.json())
      .then((data) => {
        setRowData(data);
      });
  }, [search]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={word}
          type="text"
          placeholder="Write your to do..."
        />
      </form>
      <h2>검색된 이미지가 나와야해</h2>.
      {!!rowData && <ImgBox APIdata={rowData} />}
    </div>
  );
}

export default App;
