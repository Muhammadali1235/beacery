import React from "react";
import img1 from "./img/2.jpg";
import "./Card.css";
function card() {
  return (
    <div className="card">
      <div className="incard">
        <div className="">
          <div className="Card">
            <div className="box">
              <div className="inbox">
                <h1>Salom mening ismim Muhammadali </h1>
                <h1>Familiyam Raximjonov</h1>
              </div>
              <div className="in_h2">
                <h2 className="h2">
                  Men Web-dasturlashga qiziqaman. Hozzirda men HTML CSS va
                  Javaskript dasturlash tillarini o'rgandim. Menga buladan
                  Javascript eng yoqqani bo'ldi. Shu bilan birga men hozzirda
                  React.js ni ham o'rganyapman
                </h2>
              </div>
              <div className="btn">
                <a href="https://t.me/alidev2008" className="in_btn">
                  <button>Men bilan telegram orqali bog'lanish</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="proimg">
          <a href="project" className="imgg">
            <div className="img1">
              <img className="imgg" src={img1} alt="" />
              <h3>Mening loihalarim</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default card;
