import style from "./imgBox.module.css";
import errorPepe from "./pepe.jpg";

function ImgBox(props) {
  const onErrorImg = (err) => {
    // 이미지를 날림
    err.target.className = "style.none";
    // 이미지를 페페로 바꿈
    // err.target.src = errorPepe;
  };

  return (
    <div className={style.container}>
      {props?.imgURLArr.map((img, index) => (
        // 키값 수정할것과, 디자인, 에러의 대한 처리 필요
        <img
          onError={onErrorImg}
          alt=""
          className={style.box}
          key={index}
          src={img}
        />
      ))}
    </div>
  );
}

export default ImgBox;
