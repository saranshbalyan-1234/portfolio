import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormOutlined,
  AppstoreAddOutlined,
  SnippetsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header id="toggle" className={active && "active"}>
      <div class="head-top">
        <a
          style={{ cursor: "pointer" }}
          href={() => {
            return false;
          }}
          onClick={() => {
            setActive(!active);
          }}
          class="menu-btn"
        >
          <span></span>
        </a>
        <div class="top-menu">
          <ul>
            <a href="/" class="btn">
              <HomeOutlined /> Home
            </a>
            <Link to="/resume" class="btn">
              <FormOutlined /> Resume
            </Link>

            <Link to="/portfolio" class="btn">
              <AppstoreAddOutlined /> Portfolio
            </Link>

            <Link to="/blog" class="btn">
              <SnippetsOutlined /> Blog
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
