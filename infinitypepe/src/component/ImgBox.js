import { useEffect, useRef, useState } from "react";
import "../css/ImgBox.css";

function ImgBox(props) {
  const [modal, setModal] = useState("");
  const imgBoxRef = useRef("");
  const modalRef = useRef("");
  const modalImgRef = useRef("");
  const countRef = useRef("");
  let num = 0;

  const onErrorImg = (err) => {
    err.target.parentElement.className = "error";
  };

  const onClick = (event) => {
    countRef.current.innerText = `좋아요 : 0`;
    modalImgRef.current.src = event.target.src;
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

  const countUp = () => {
    num = num + 1;
    countRef.current.innerText = `좋아요 : ${num}`;
  };

  return (
    <div className="container">
      <div className="layout_imgBox" /**row */>
        {props?.imgURLArr.map((img, index) => (
          <div className="box">
            <img
              onClick={onClick}
              className="img"
              onError={onErrorImg}
              alt=""
              key={index}
              src={img}
            />
            <div className="imgIcon">
              <button>🔴</button>
              <button>🟠</button>
              <button>💻</button>
            </div>
          </div>
        ))}
      </div>
      <div className=" close" onClick={bgClick} ref={modalRef}>
        <div className="modal">
          <img ref={modalImgRef}></img>
          <h1 ref={countRef}></h1>
          <button onClick={closeModal}>❌</button>
          <button onClick={countUp}>💘</button>
          <button>💌</button>
        </div>
      </div>
    </div>
  );
}

export default ImgBox;
