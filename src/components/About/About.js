import React from "react";
import "./About.css";
import img6 from "./img/5.jpg";
import img7 from "./img/img.png";
import img8 from "./img/bo.png";
function About() {
  return (
    <div className="Aboud">
      <div className="container">
        <div>
          <h1>
            Salom Mening ismim Muhammadali <br /> Familiam Rahimjonov
          </h1>
          <h2 className="about_h2">
            Men Namangan viloyati To'raqo'rg'on tumanida istiqomat qilaman
          </h2>
          <h2 className="about_h2_1">
            Web dasturlashga qiziqaman. Bu yo'nalishda 7-oydan buyion
            shug'ullanib kalmoqdaman
          </h2>
        </div>
        <div className="">
          <img className="about_img1" src={img6} alt="" />
        </div>
      </div>
      <div className="about_card">
        <h1>Professional mahorat to'plami</h1>
        <h2>Men o'z loyihalarimda foydalanganman</h2>
        <div className="imgs" style={{ display: "flex" }}>
          <div>
            <img className="clas" src={img7} alt="" />
          </div>
          <div>
            <img className="about_img2" src={img8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
