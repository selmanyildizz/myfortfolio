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
        <div className="social-media d-flex gap-2">
          <button style={{boxShadow:"rgba(206, 180, 154, 0.4) 5px 5px",border:"1px dotted black"}} ><img src="/assets/images/github.svg" alt="" /></button>
          <button style={{boxShadow:"rgba(206, 180, 154, 0.4) 5px 5px",border:"1px dotted black"}} ><img src="/assets/images/linkedin.svg" alt="" /></button>
          

          
        </div>
      </div>
      <div className="middle-section d-flex justify-content-end align-items-center p-3" >
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
            style={{ maxWidth: "200px", height: "auto" }}
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
      {/* <div style={{ height: "1px", backgroundColor: "gray" }}></div> */}
      <h3 className="text-center mb-3">My Skills</h3>
      <div className="skills d-flex justify-content-around align-items-center">
        
        <div style={{boxShadow:" rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"}}>
          <img src="/assets/images/git.svg" alt="" width={60} />
        </div>
        <div style={{boxShadow:" rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"}}>
          a
        </div>
        <div style={{boxShadow:" rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"}}>
          a
        </div>
        <div style={{boxShadow:" rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"}}>
          s
        </div>
      </div>
      
    </div>
  );
}

export default MainPage;
