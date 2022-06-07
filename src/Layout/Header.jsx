import React, { useState } from "react";

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
            <li>
              <a href="resume.html" class="lnk">
                Resume
              </a>
            </li>
            <li>
              <a href="portfolio.html" class="lnk">
                Portfolio
              </a>
            </li>
            <li>
              <a href="blog.html" class="lnk">
                Blog
              </a>
            </li>
            <li>
              <a href="contacts.html" class="btn">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
