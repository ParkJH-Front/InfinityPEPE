import { useEffect, useRef, useState } from "react";
import style from "../css/Login.module.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // useRef = DOM 객체 or element 에 접근하는 HOOK
  const inputRef = useRef();
  // 최초 한번 렌더링 시 포커스 위치를 지정.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onkeyDown = (event) => {
    const enter = event.keyCode; // enter = 13
    if (enter === 13) {
      inputRef.current.focus();
    }
  };

  const onChangeID = (event) => setId(event.target.value);
  const onChangePW = (event) => {
    setPw(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const URLID = `http://localhost:4000/Profiles/${id}`;
    // value id,pw 을 통해서 json 쿼리 하고 그 결과값으로 if
    fetch(URLID)
      .then((req) => req.json())
      .then((json) => {
        const userID = json.id;
        const userPW = json.password;
        console.log(userID, userPW);
        if (userID === undefined) {
          alert("ID가 존재하지 않습니다.");
        } else if (userPW !== pw) {
          alert("PW가 존재하지 않습니다.");
        } else {
          console.log(userID, userPW);
          console.log("떳냐?");
        }
      });
  };

  return (
    <div>
      <div className={style.row}>
        <button className={style.btn}>회원가입</button>

        <form className={style.loginform} onSubmit={onSubmit}>
          <span className={style.text}>ID :</span>
          <input
            className={style.input}
            ref={inputRef}
            onKeyDown={onkeyDown}
            onChange={onChangeID}
            placeholder="writh your ID"
            type="text"
            required
          ></input>
          <span className={style.text}>PW :</span>
          <input
            className={style.input}
            ref={inputRef}
            onChange={onChangePW}
            placeholder="writh your PW"
            type="password"
            required
          ></input>
          <button className={style.btn} type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
