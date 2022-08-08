import { useEffect, useRef } from "react";

function Login() {
  // 로그인폼에 id 입력 엔터 pw 으로 넘어감
  // pw 까지 입력 후 엔터 submit 이벤트 발생 or pw 까지 입력 후 btn onClick시 submit 이벤트 발생
  // submit 이벤트 내 json/data.json API 에 접근
  // 등록되지 않은 ID, PW 의 경우 경고창 팝업
  // 등록되어 있는 ID, PW 의 경우 로그인 완료
  // 로그인완료 시 API 데이터를 통해 닉네임 nav에 표기, 로그인 모달 hidden

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

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("call json");
    const URL = "http://localhost:4001/Profiles/";
    fetch(URL)
      .then((req) => req.json())
      .then((json) => {
        console.log(json);
        console.log(json[0].id);
      }); //json 다 가져옴
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            id="id"
            ref={inputRef}
            onKeyDown={onkeyDown}
            placeholder="writh your ID"
            type="text"
            required
          ></input>
          <input
            ref={inputRef}
            id="pw"
            placeholder="writh your PW"
            type="text"
            required
          ></input>
          <button id="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
