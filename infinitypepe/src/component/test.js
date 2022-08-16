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
      <button onClick={onClick}>Click!!!!</button>
      <h1 ref={testRef}>test world</h1>
    </div>
  );
}

export default Test;
