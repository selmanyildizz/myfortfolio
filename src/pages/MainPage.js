import React from "react";

function MainPage() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ffffff",
        // margin: "30px",
        // padding: "10px 30px 10px 30px",
      }}
    >
      <div className="topMenu d-flex justify-content-between align-items-center">
        <div>
          <img
            src="/assets/images/logo.png"
            alt="wavingHand"
            style={{ width: "70px", height: "auto" }}
          />
        </div>
        <div className="links d-flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <img src="/assets/images/github.svg" alt="" />
          <img src="/assets/images/linkedin.svg" alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center p-5">
        <div className="desc text-start">
          <div className="title">
            <div>Hello I'am Selman Yıldız</div>
            <div>Frontend Developer</div>
          </div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque porttitor nisi tortor, vitae feugiat ipsum volutpat at.
            Quisque egestas a nulla sit amet volutpat. Vestibulum consectetur
            consectetur ornare. Sed a scelerisque nisi. Maecenas sit amet ex at.
          </div>
        </div>
        <div>
          {" "}
          <img
            src="/assets/images/hero.png"
            alt="hero"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
        <button type="button" class="btn btn-dark">
          Resume
          <img
            src="/assets/images/download.svg"
            alt=""
            style={{ width: "20px", height: "auto", color: "white" }}
          />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
