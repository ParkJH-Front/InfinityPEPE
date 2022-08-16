import { useRef, useState } from "react";
import "../css/ImgBox.css";

function ImgBox(props) {
  const [modal, setModal] = useState("");
  const modalRef = useRef("");

  const onErrorImg = (err) => {
    err.target.className = "error";
  };

  const onClick = (event) => {
    setModal(event.target.currentSrc);
    modalHandler();
  };

  const closeModal = (event) => {
    modalHandler();
  };

  function modalHandler() {
    const triger = modalRef.current.className;
    if (triger === "close") {
      modalRef.current.className = "modalContanier";
      console.log("trtr");
    } else {
      modalRef.current.className = "close";
      console.log("rtrt");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="modalContanier close" ref={modalRef}>
          <div className="modal">
            <img src={modal}></img>
            <h1>이것은 모달창이요</h1>
            <button onClick={closeModal}>❌</button>
            <button>💘</button>
            <button>💌</button>
          </div>
        </div>
        {props?.imgURLArr.map((img, index) => (
          // 키값 수정할것과, 디자인, 에러의 대한 처리 필요
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
