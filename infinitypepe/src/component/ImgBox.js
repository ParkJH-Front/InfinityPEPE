import error from "../css/Error.module.css";

function ImgBox(props) {
  const onErrorImg = (err) => {
    err.target.className = "error.none";
  };

  return (
    <div>
      <div>
        {props?.imgURLArr.map((img, index) => (
          // 키값 수정할것과, 디자인, 에러의 대한 처리 필요
          <img onError={onErrorImg} alt="" key={index} src={img} />
        ))}
      </div>
    </div>
  );
}

export default ImgBox;
