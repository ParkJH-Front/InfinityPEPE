import style from "../css/ImgBox.module.css";

function ImgBox(props) {
  const onErrorImg = (err) => {
    err.target.className = "error";
  };

  return (
    <div className="container">
      <div className={style.row}>
        {props?.imgURLArr.map((img, index) => (
          // 키값 수정할것과, 디자인, 에러의 대한 처리 필요
          <img
            className={style.box}
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
