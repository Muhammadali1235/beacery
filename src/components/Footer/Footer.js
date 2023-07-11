import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <div className="Footer">
      <ul className="ul">
        <li>
          <a href="https://t.me/alidev2006">
            Telegram
            <BsTelegram />
          </a>
        </li>
        <li>
          <a href="rahimjonovmuhammadali1@gmail.com">
            YouTube
            <AiFillYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
