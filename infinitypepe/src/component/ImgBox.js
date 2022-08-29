import { useEffect, useRef, useState } from "react";
import "../css/ImgBox.css";

// 주석처리는 모달기능, 필요하면 다시 구현

function ImgBox(props) {
  const [modal, setModal] = useState("");
  const imgBoxRef = useRef("");
  const modalRef = useRef("");
  const modalImgRef = useRef("");
  const countRef = useRef("");

  const onErrorImg = (err) => {
    err.target.parentElement.className = "error";
  };

  function downloadHandler(imgURL) {
    console.log(imgURL);
    fetch(imgURL, { method: "GET" }).then((req) => console.log(req.blob()));
  }

  // const onClick = (event) => {
  //   modalImgRef.current.src = event.target.src;
  //   modalHandler();
  // };

  // const closeModal = (event) => {
  //   modalHandler();
  // };

  // const bgClick = (event) => {
  //   const bg = event.target.className;
  //   if (bg === "modalContanier") {
  //     modalRef.current.className = "close";
  //   }
  // };

  // function modalHandler() {
  //   const triger = modalRef.current.className;
  //   if (triger === "modalContanier") {
  //     modalRef.current.className = "close";
  //   } else {
  //     modalRef.current.className = "modalContanier";
  //   }
  // }

  return (
    <div className="container">
      <div className="layout_imgBox" /**row */>
        {props?.imgURLArr.map((img, index) => (
          <div className="box">
            <img
              // onClick={onClick}
              className="img"
              onError={onErrorImg}
              alt=""
              key={index}
              src={img}
            />
            <div className="imgIcon">
              <button>🔴</button>
              <button>🟠</button>

              <button type="button" onClick={() => downloadHandler(img)}>
                다운로드
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className=" close" onClick={bgClick} ref={modalRef}>
        <div className="modal">
          <div className="column">
            <img ref={modalImgRef}></img>
            <div>
              <button onClick={closeModal}>❌</button>
              <button>💌</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ImgBox;
