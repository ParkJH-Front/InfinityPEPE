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

// function Box(props) {
//   const [imgArr, setImgArr] = useState(props);
//   console.log("왜?");
//   console.log(imgArr);
//   return (
//     <div>
//       <h1>test</h1>
//     </div>
//   );
// }

function Main() {
  const [word, setWord] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [searchData, setSearchData] = useState([]); //searchData 에 결과가 들어있음.. 어케뺌?

  const onChange = (event) => setWord(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (word === "") {
      return;
    }

    if (trigger === false) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  };

  useEffect(() => {
    fetch(`https://dapi.kakao.com/v2/search/image?query=${word}`, {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
    })
      .then((req) => req.json())
      .then((data) => {
        setSearchData(data);
        setWord("");
      });
  }, [trigger]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={word}
          type="text"
          placeholder="findIMG"
        />
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Nav />
      <Main />
    </div>
  );
}
export default App;
