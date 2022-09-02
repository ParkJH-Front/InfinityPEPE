import { useState } from "react";
import "../css/wellcome.css";
import logo from "../img/logo_nukki.png";

function Wellcome() {
  const [bgImg, setBgImg] = useState("");
  const backgroundImgUrl = "https://source.unsplash.com/random";

  // const backgroundImgStyle = {
  //   "background-image": `url(${bgImg})`,
  // };

  fetch(backgroundImgUrl, {}).then((res) => {
    if (res.ok === true) {
      console.log(res);
    }
  });

  return (
    <main className="container">
      <article className="">
        <section className="background">
          <div className="title flex_column">
            <img className="logo" src={logo}></img>
            <h1>다양한 이미지를 빠르게 찾아보세요.</h1>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Wellcome;
