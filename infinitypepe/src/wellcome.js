import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./wellcome.module.css";

function Wellcome() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);

  const onSubmit = () => {
    navigate(`/aaa${value}`);
  };

  return (
    <div className={style.bak}>
      <form onSubmit={onSubmit} className={style.container}>
        <div className={style.logo}></div>
        <input onChange={onChange} className={style.input} type="text"></input>
        <button className={style.btn} type="submit"></button>
      </form>
    </div>
  );
}

export default Wellcome;
