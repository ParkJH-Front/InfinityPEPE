import { useState } from "react";

function ImgBox(props) {
  const [imgArr, setImgArr] = useState([]);

  setImgArr(props.APIdata);

  console.log(imgArr.length);

  return (
    <div>
      <img src={imgArr}></img>
    </div>
  );
}
export default ImgBox;
