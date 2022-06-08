import React from "react";
import {
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <footer>
      <div class="soc">
        <a target="_blank" href="https://dribbble.com/">
          <GithubOutlined className="handleIcon" />
        </a>
        <a target="_blank" href="https://twitter.com/">
          <InstagramOutlined className="handleIcon" />
        </a>
        <a target="_blank" href="https://github.com/">
          <FacebookOutlined className="handleIcon" />
        </a>
        <a href="tel:+91-9999075909">
          <PhoneOutlined className="handleIcon" />
        </a>
        <a href="mailto:saranshbalyan123@gmail.com">
          <MailOutlined className="handleIcon" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919868598141">
          <WhatsAppOutlined className="handleIcon" />
        </a>
      </div>
      <div class="copy">© 2022 Saransh Balyan. All rights reserved.</div>
      <div class="clr"></div>
    </footer>
  );
}
