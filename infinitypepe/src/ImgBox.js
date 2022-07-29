import { useState } from "react";

function ImgBox(props) {
  const [imgData, setImgdata] = useState(props.APIdata.documents);
  console.log(imgData);

  return (
    <div>
      <img src="imgData"></img>
    </div>
  );
}

export default ImgBox;
