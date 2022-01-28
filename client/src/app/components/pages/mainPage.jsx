import React from "react";
import imgUrl from "../../img/main-bg.jpg";

const MainPage = () => {
  const bgImg = {
    height: "100vh",
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <>
      <div style={bgImg}>
        <h1 className="main-title">A Luxury Stay</h1>
      </div>
    </>
  );
};

export default MainPage;
