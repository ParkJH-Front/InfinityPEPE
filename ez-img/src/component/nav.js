import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  // const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);

  // const onSubmit = () => {
  //   navigate(`/main${value}`);
  // };

  return (
    <nav>
      {/* 로고 => 메인으로 가기 */}
      <section>
        <img src=""></img>
      </section>
      {/* 검색기능 */}
      <section>
        {/* <form onSubmit={onSubmit}> */}
        <form>
          <div>
            <input
              onChange={onChange}
              type="text"
              placeholder="  이미지 검색"
            ></input>
            <button>search</button>
          </div>
        </form>
      </section>
      {/* 로그인기능 */}
      <section>
        <form></form>
      </section>
    </nav>
  );
}

export default Nav;
