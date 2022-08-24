import { useEffect, useState } from "react";
import Login from "./Login";

function Forum() {
  const URL = "http://localhost:4000/Forum";

  const [APIdata, setAPIdata] = useState([]);

  function createAPI() {}

  useEffect(() => {
    fetch(URL)
      .then((req) => req.json())
      .then((json) => {
        const data = json;
        setAPIdata(data);
      });
  }, []);

  const delClick = (event) => {
    delectAPI();
  };

  function delectAPI() {
    return;
  }

  return (
    <div>
      <Login />
      <div>
        <button onClick={createAPI}>글작성</button>
        <div></div>
        <div>
          {APIdata.map((array, index) => (
            <div key={index}>
              <h1>{array.title}</h1>
              <span>{array.date}</span>
              <span>{array.id}</span>
              <span>{array.count}</span>
              <p>{array.body}</p>
              <p>{array.comment}</p>
              <button onClick={delClick}>글삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;
