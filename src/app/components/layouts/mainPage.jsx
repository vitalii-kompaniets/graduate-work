import React from "react";
import imgUrl from "../../img/main-bg.jpg";

const MainPage = () => {
  const bgImg = {
    height: "100vh",
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <>
      <div style={bgImg}>Контент</div>
    </>
  );
};

export default MainPage;
