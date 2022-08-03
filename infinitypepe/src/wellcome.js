import style from "./wellcome.module.css";

function Wellcome() {
  return (
    <div className={style.bak}>
      <form className={style.container}>
        <div className={style.logo}></div>
        <input className={style.input} type="text"></input>
        <button className={style.btn}></button>
      </form>
    </div>
  );
}

export default Wellcome;
