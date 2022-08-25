import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Wellcome.css";
import logoImg from "../img/logo_nukki.png";
import Login from "./Login";

function Wellcome() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);

  const onSubmit = () => {
    navigate(`/aaa${value}`);
  };

  // // 배경 백그라운드 이미지 랜덤으로 가져올 로직임.
  // function randomBackground() {
  //   fetch("http://placeimg.com/1000/480/nature/grayscale").then((req) =>
  //     console.log(req)
  //   );
  // }
  // randomBackground();

  return (
    <div>
      <Login />
      <div className="container">
        <div className="column layout_center">
          <div>
            <img className="logo" src={logoImg} alt="logo" />
          </div>
          <h1>다양한 이미지를 빠르게 찾아보세요</h1>
          <form onSubmit={onSubmit}>
            <div className="row">
              <input
                className="input_main"
                onChange={onChange}
                type="text"
                placeholder="  이미지 검색"
              ></input>
              <button className="btn_main">search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
