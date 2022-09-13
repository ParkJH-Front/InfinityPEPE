import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo_nukki.png";
import backgroundImg from "../img/background.jpg";
import "../css/login.css";
import "../css/nav.css";

function Login() {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const JsonServer = "http://localhost:4000/Profiles";
  const USERNAME = "USERNAME";

  // 로그인 점검 로직 성공 시 localStorage 내 ID 정보 저장.
  const onID = (event) => setUserID(event.target.value);
  const onPW = (event) => setUserPW(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`${JsonServer}/${userID}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.id === undefined) {
          alert("id 또는 password가 잘못 입력되었습니다.");
        } else if (json.password !== userPW) {
          alert("id 또는 password가 잘못 입력되었습니다.");
        } else {
          alert("로그인성공!");
          localStorage.setItem(USERNAME, userID);
        }
      });
  };

  // 회원가입 기능
  const [newID, setNewID] = useState("");
  const [newPW, setNewPW] = useState("");
  const [rePW, setRePW] = useState("");
  const [email, setEmail] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <article>
      {/* 배경 이미지 */}
      <section>
        <img src={backgroundImg} className="background_login" />
      </section>
      {/* 상단 nav */}
      <section>
        <nav className="background_nav">
          {/* 로고 => wellcome 으로 가기 */}
          <section>
            <a href="/">
              <img className="logo_nav" src={logo}></img>
            </a>
          </section>
          {/* 로그인기능 */}
          <section>
            <form>
              <button className="login_btn">login</button>
            </form>
          </section>
        </nav>
      </section>
      {/* 로그인 기능 */}
      <section className="login_box center">
        {/* <form onSubmit={onSubmit} className="flex_column">
          <div>
            <span>ez-img 로그인</span>
          </div>
          <div>
            <input
              onChange={onID}
              value={userID}
              placeholder="writh your ID"
              type="text"
              required
            ></input>
          </div>
          <div>
            <input
              onChange={onPW}
              value={userPW}
              placeholder="writh your PW"
              type="password"
              required
            ></input>
          </div>
          <button className="login_box_btn">Enter</button>
        </form>
        <form className="flex_column">
          <button className="login_box_btn">회원가입</button>
        </form> */}
        {/* 회원가입 기능 */}
        <section className="flex_column sign_Up">
          <input placeholder="newID"></input>
          <input placeholder="newPW"></input>
          <input placeholder="rePW"></input>
          <input placeholder="email-address"></input>
          <input placeholder="name"></input>
          <button>회원가입</button>
        </section>
      </section>
    </article>
  );
}

export default Login;
