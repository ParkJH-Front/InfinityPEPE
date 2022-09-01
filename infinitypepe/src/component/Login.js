import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkID, setCheckID] = useState(null);
  const [greeting, setGreeting] = useState("");
  const USERNAME = "userName";
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

  function singUpDisplay(targer) {
    if (targer === "on") {
      loginBoxRef.current.className = "none";
      signUpBoxRef.current.className = "show";
    } else {
      loginBoxRef.current.className = "show";
      signUpBoxRef.current.className = "none";
    }
  }

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
          alert("환영합니다.");
          setGreeting(`환영합니다 ${id} 님.`);
          localStorage.setItem(USERNAME, JSON.stringify(userID));
          singUpDisplay("on");
        }
      });
  };

  function checkSingUp() {
    setCheckID(localStorage.getItem(USERNAME));
    if (checkID === null) {
      console.log(`ID 비엇어 ${checkID}`);
      return;
    } else {
      console.log(`ID 들어있어 ${checkID}`);
      setGreeting(`환영합니다 ${checkID} 님.`);
      singUpDisplay("on");
    }
  }

  const logout = () => {
    setCheckID(null);
    localStorage.clear();
    singUpDisplay("off");
  };

  useEffect(() => {
    checkSingUp();
  }, []);

  return (
    <div className="row row_Login">
      <div>
        <div className="show" ref={loginBoxRef}>
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
        <span className="layout_back">{greeting}</span>
        <button className="btn_sub" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default Login;
