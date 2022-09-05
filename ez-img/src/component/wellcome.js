import { useEffect, useState, useRef } from "react";
import "../css/wellcome.css";
import logo from "../img/logo_nukki.png";
import Nav from "./nav";

function Wellcome() {
  const [bgImg, setBgImg] = useState("");
  const backgroundImgUrl = "https://source.unsplash.com/random";

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    fetch(backgroundImgUrl).then((res) => {
      if (res.ok === true) {
        setBgImg(res.url);
      }
    });
  }, 3000);

  return (
    <main className="container">
      <Nav />
      <article>
        <section>
          <img
            src={bgImg}
            alt="backgroundImg"
            className="background_main"
          ></img>
        </section>
        <section>
          <div className="center_main flex_column">
            <img className="logo" src={logo}></img>
            <h1>다양한 이미지를 빠르게 찾아보세요.</h1>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Wellcome;
