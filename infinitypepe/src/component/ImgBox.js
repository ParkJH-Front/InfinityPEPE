import { createElement, useEffect, useRef, useState } from "react";
import "../css/ImgBox.css";

function ImgBox(props) {
  const [modal, setModal] = useState("");
  const imgBoxRef = useRef("");
  const modalRef = useRef("");
  const modalImgRef = useRef("");
  const imgRef = useRef("");

  const onErrorImg = (err) => {
    err.target.parentElement.className = "error";
  };

  function downloadHandler(imgURL) {
    alert("CORS 문제 해결 후 기능 구현 예정 ~ '༼ つ ◕_◕ ༽つ");
  }

  const openModal = (img) => {
    modalImgRef.current.src = img;
    modalHandler();
  };

  const closeModal = (event) => {
    modalHandler();
  };

  const bgClick = (event) => {
    const bg = event.target.className;
    if (bg === "modalContanier") {
      modalRef.current.className = "close";
    }
  };

  function modalHandler() {
    const triger = modalRef.current.className;
    if (triger === "modalContanier") {
      modalRef.current.className = "close";
    } else {
      modalRef.current.className = "modalContanier";
    }
  }

  return (
    <div className="container">
      <div className="layout_imgBox" /**row */>
        {props?.imgURLArr.map((img, index) => (
          <div className="box">
            <img
              className="img"
              onError={onErrorImg}
              alt=""
              key={index}
              src={img}
            />
            <div className="imgIcon">
              <button>스크랩</button>
              <button onClick={() => openModal(img)}>크게보기</button>
              <button type="button" onClick={() => downloadHandler(img)}>
                다운로드
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" close" onClick={bgClick} ref={modalRef}>
        <div className="modal">
          <div className="column modalShow">
            <img ref={modalImgRef}></img>
            <button className="modalBtn" onClick={closeModal}>
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgBox;
