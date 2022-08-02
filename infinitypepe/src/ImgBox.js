import style from "./imgBox.module.css";

function ImgBox(props) {
  return (
    <div className={style.container}>
      {props?.imgURLArr.map((img, index) => (
        // 키값 수정할것과, 디자인, 에러의 대한 처리 필요
        <img className={style.box} key={index} src={img}></img>
      ))}
    </div>
  );
}
export default ImgBox;
