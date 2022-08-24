import { useRef } from "react";

function Test() {
  const testRef = useRef("");
  let num = 0;

  const onClick = (event) => {
    num = num + 1;
    console.log(num);
    testRef.current.innerText = num;
    console.log(testRef.current.innerText);
  };

  return (
    <div>
      <div>
        <input className="input_main" placeholder="input 1"></input>
        <input className="input_sub" placeholder="input 2"></input>
        <button className="btn_main">btn1</button>
        <button className="btn_sub">btn2</button>
      </div>
      <div>
        <div>
          <div className="font-large">divdivdiv</div>
          <p>pppppppp</p>
          <span>sapnsapn</span>
        </div>
      </div>
    </div>
  );
}

export default Test;
