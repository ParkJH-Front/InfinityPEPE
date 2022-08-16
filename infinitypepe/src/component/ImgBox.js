import { useRef, useState } from "react";
import "../css/ImgBox.css";

function ImgBox(props) {
  const [modal, setModal] = useState("");
  const modalRef = useRef("");
  const countRef = useRef("");
  let num = 0;

  const onErrorImg = (err) => {
    err.target.className = "error";
  };

  const onClick = (event) => {
    countRef.current.innerText = `좋아요 : 0`;
    setModal(event.target.currentSrc);
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
    if (triger === "close") {
      modalRef.current.className = "modalContanier";
    } else {
      modalRef.current.className = "close";
    }
  }

  const countUp = () => {
    num = num + 1;
    countRef.current.innerText = `좋아요 : ${num}`;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="modalContanier close" onClick={bgClick} ref={modalRef}>
          <div className="modal">
            <img src={modal}></img>
            <h1 ref={countRef}></h1>
            <button onClick={closeModal}>❌</button>
            <button onClick={countUp}>💘</button>
            <button>💌</button>
          </div>
        </div>
        {props?.imgURLArr.map((img, index) => (
          <img
            onClick={onClick}
            className="box"
            onError={onErrorImg}
            alt=""
            key={index}
            src={img}
          />
        ))}
      </div>
    </div>
  );
}

export default ImgBox;
