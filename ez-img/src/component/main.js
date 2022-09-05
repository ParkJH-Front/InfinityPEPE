import { useEffect, useState, Component, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import ImgRander from "./imgrander";
import Loding from "../img/Rhombus.gif";

function Main() {
  /** API 통해 검색된 ImgURL */
  const [imgURL, setImgURL] = useState("");

  /** 최초 rander 시 Nav component 전달 받은 Prop 로 검색하는 로직 */
  const params = useParams().text;
  useEffect(() => {
    APIHandler(params);
  }, []);

  /** 이미지 검색 API, input: word(string) return: imgURL */
  function APIHandler(keyword) {
    let URL = `https://dapi.kakao.com/v2/search/image?query=${keyword}`;
    fetch(URL, {
      headers: {
        Authorization: "KakaoAK 17d6f89d24fa2565f0e7155dc37188f0",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setImgURL(
          Object.values(json)[0].map((item) => {
            return item.image_url;
          })
        );
      });
  }
  return (
    <div>
      <Nav />
      <h1>찾은 이미지</h1>
      <Suspense fallback={<img src={Loding} alt="loding" />}>
        <ImgRander imgURL={imgURL} />
      </Suspense>
    </div>
  );
}

export default Main;
