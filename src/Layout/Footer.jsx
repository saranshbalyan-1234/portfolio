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
          <GithubOutlined />
        </a>
        <a target="_blank" href="https://twitter.com/">
          <InstagramOutlined />
        </a>
        <a target="_blank" href="https://github.com/">
          <FacebookOutlined />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <PhoneOutlined />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <MailOutlined />
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <WhatsAppOutlined />
        </a>
      </div>
      <div class="copy">© 2022 Saransh Balyan. All rights reserved.</div>
      <div class="clr"></div>
    </footer>
  );
}
