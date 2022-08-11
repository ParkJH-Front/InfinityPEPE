import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../css/Wellcome.module.css";
import logoImg from "../img/logo_nukki.png";
import Login from "./Login";

function Wellcome() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);

  const onSubmit = () => {
    navigate(`/aaa${value}`);
  };

  return (
    <div className="container">
      <Login />
      <div className={style.contanier}>
        <form className={style.row} onSubmit={onSubmit}>
          <img className={style.logo} src={logoImg} alt="logo" />
          <h1></h1>
          <div className={style.inputFrom}>
            <input
              className={style.input}
              onChange={onChange}
              type="text"
              placeholder="search your think~"
            ></input>
            <button className={style.inputBtn}>search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Wellcome;
