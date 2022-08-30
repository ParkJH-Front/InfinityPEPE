import { useRef } from "react";
import "../css/test.css";

function Test() {
  const testRef = useRef("");
  let num = 0;

  const onClick = (event) => {
    num = num + 1;
    console.log(num);
    testRef.current.innerText = num;
    console.log(testRef.current.innerText);
  };

  function testOnClick(event) {
    if (event.target.className === "testimg") {
      event.target.className = "hidden";
    } else {
      event.target.className = "testimg";
    }
  }

  return (
    <div>
      <a
        href="http://t1.daumcdn.net/cfile/tistory/990E31405E0ECEE134"
        download
        className="input_main"
      >
        <img src="http://t1.daumcdn.net/cfile/tistory/990E31405E0ECEE134" />
      </a>
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
      <div className="box">
        <div className="box_ani">
          <div className="img_test"> 123123</div>
          <div className="imgIcon">
            <div>🔴</div>
            <div>🟠</div>
            <div>🟢</div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box_ani">
          <div className="img_test"> 123123</div>
          <div className="imgIcon">
            <div>🔴</div>
            <div>🟠</div>
            <div>🟢</div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box_ani">
          <div className="img_test"> 123123</div>
          <div className="imgIcon">
            <div>🔴</div>
            <div>🟠</div>
            <div>🟢</div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box_ani">
          <div className="img_test"> 123123</div>
          <div className="imgIcon">
            <div>🔴</div>
            <div>🟠</div>
            <div>🟢</div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="box">
          <div className="box_ani">
            <div className="img_test"> 123123</div>
            <div className="imgIcon">
              <div>🔴</div>
              <div>🟠</div>
              <div>🟢</div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box_ani">
            <div className="img_test"> 123123</div>
            <div className="imgIcon">
              <div>🔴</div>
              <div>🟠</div>
              <div>🟢</div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgback"></div>
    </div>
  );
}

export default Test;
