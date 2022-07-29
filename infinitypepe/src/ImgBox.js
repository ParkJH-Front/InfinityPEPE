import { useState } from "react";

function ImgBox(props) {
  const ImgURL = props.APIdata.documents[0]?.image_url ?? "./pepe.jpg";

  return (
    <div>
      <img src={ImgURL}></img>
    </div>
  );
}
export default ImgBox;
