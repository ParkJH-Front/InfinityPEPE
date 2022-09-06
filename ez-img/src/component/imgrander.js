import { useRef } from "react";
import "../css/imgrander.css";

function ImgRander(props) {
  const modalRef = useRef("");
  const modalImgRef = useRef("");

  const propsArray = Object.values(props?.imgURL);

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
    <section className="layout_imgbox">
      <div className="column_imgBox">
        {propsArray.map((imgSrc, index) => (
          <div className="box">
            <img
              className="rander_img"
              src={imgSrc}
              key={index}
              onError={onErrorImg}
            />
            <div className="imgIcon">
              <button>스크랩</button>
              <button onClick={() => openModal(imgSrc)}>크게보기</button>
              <button type="button" onClick={() => downloadHandler(imgSrc)}>
                다운로드
              </button>
            </div>
          </div>
        ))}
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
    </section>
  );
}

export default ImgRander;
