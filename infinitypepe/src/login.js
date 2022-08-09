import { useEffect, useRef, useState } from "react";
// 로그인폼에 id 입력 엔터 pw 으로 넘어감
// pw 까지 입력 후 엔터 submit 이벤트 발생 or pw 까지 입력 후 btn onClick시 submit 이벤트 발생
// submit 이벤트 내 json/data.json API 에 접근
// 등록되지 않은 ID, PW 의 경우 경고창 팝업
// 등록되어 있는 ID, PW 의 경우 로그인 완료
// 로그인완료 시 API 데이터를 통해 닉네임 nav에 표기, 로그인 모달 hidden

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
  const onChangePW = (event) => setPw(event.target.value);

  const onSubmit = (event) => {
    console.log(id, pw);
    event.preventDefault();
    console.log(event.target.value);
    const URL = `http://localhost:4001/Profiles/${id}`;
    // value id,pw 을 통해서 json 쿼리 하고 그 결과값으로 if
    fetch(URL)
      .then((req) => req.json())
      .then((json) => {
        const check = Object.keys(json).length;
        console.log(json);
        if (check === 0) {
          console.log("회원가입 정보가 확인되지 않습니다.");
        } else {
          console.log("회원가입 정보가 확인됩니다.");
        }
        // console.log(json[0].id);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            id="id"
            ref={inputRef}
            onKeyDown={onkeyDown}
            onChange={onChangeID}
            placeholder="writh your ID"
            type="text"
            required
          ></input>
          <input
            ref={inputRef}
            id="pw"
            onChange={onChangePW}
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
