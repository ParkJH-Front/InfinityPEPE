import { useEffect, useState } from "react";
import ImgBox from "./ImgBox";

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
      .then((req) => req.json())
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
