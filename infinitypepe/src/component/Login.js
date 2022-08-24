import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // useRef = DOM 객체 or element 에 접근하는 HOOK
  const inputRef = useRef();
  // 최초 한번 렌더링 시 포커스 위치를 지정.
  const loginBoxRef = useRef();
  const signUpBoxRef = useRef();

  const navigate = useNavigate();
  const moveSignup = (event) => navigate(`/signup`);

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
        if (userID === undefined) {
          alert("ID가 존재하지 않습니다.");
        } else if (userPW !== pw) {
          alert("PW가 존재하지 않습니다.");
        } else {
          loginBoxRef.current.className = "none";
          signUpBoxRef.current.className = "show";
        }
      });
  };

  return (
    <div className="row row_Login">
      <div>
        <div ref={loginBoxRef}>
          <div className="row row_Login">
            <form className="layout_back" onSubmit={onSubmit}>
              <span>ID :</span>
              <input
                className="input_sub layout_input "
                ref={inputRef}
                onKeyDown={onkeyDown}
                onChange={onChangeID}
                placeholder="writh your ID"
                type="text"
                required
              ></input>
              <span>PW :</span>
              <input
                className="input_sub layout_input "
                ref={inputRef}
                onChange={onChangePW}
                placeholder="writh your PW"
                type="password"
                required
              ></input>
              <button className="btn_sub layout_btn" type="submit">
                Enter
              </button>
            </form>
            <div>
              <button className="btn_sub layout_btn" onClick={moveSignup}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="none" ref={signUpBoxRef}>
        <div className="layout_back">환영합니다 {id}님.</div>
      </div>
    </div>
  );
}

export default Login;
