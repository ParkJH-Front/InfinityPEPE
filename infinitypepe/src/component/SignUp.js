import { useState } from "react";

function SignUp() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const URL = "http://localhost:4000/Profiles";

  const IDvalue = (event) => setID(event.target.value);
  const PWvalue = (event) => setPW(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    APICheck(ID, PW);
  };

  function APICheck(ChkID, ChkPW) {
    fetch(`${URL}/${ChkID}`).then((req) => {
      if (req.status === 200) {
        alert("이미 존재하는 계정입니다.");
        return;
      } else {
        APICreate(ChkID, ChkPW);
      }
    });
  }

  function APICreate(NewID, NewPW) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: NewID,
        password: NewPW,
        email: `${NewID}@ezimg.com`,
        name: `귀요미${NewID}`,
      }),
    });
  }

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
