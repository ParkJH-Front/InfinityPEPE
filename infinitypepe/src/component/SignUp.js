import { useState } from "react";

function SignUp() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const IDvalue = (event) => setID(event.target.value);
  const PWvalue = (event) => setPW(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
      <div>
        <p>익명입니다 알겠어요?</p>
        <p>대충 일정기간 지나면 계삭되니까 참고 ㅋㅋ</p>
        <form onSubmit={onSubmit}>
          <span>ID(email) : </span>
          <input onChange={IDvalue}></input>
          <p></p>
          <span>PW : </span>
          <input onChange={PWvalue}></input>
          <p></p>
          <button>가입</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
