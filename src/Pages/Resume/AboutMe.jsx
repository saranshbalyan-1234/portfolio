import React from "react";
import { DownloadOutlined, AlertOutlined } from "@ant-design/icons";
import { FaReact, FaCss3Alt, FaLaravel, FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { Tag, Card } from "antd";
export default function AboutMe() {
  const { Meta } = Card;
  return (
    <div class="section about">
      <div class="content">
        <div class="title"></div>
        <div class="image">
          <img src="/saransh1.png" alt="" />
        </div>

        <div class="desc">
          <Card hoverable>
            <Meta
              title={
                <div style={{ display: "flex" }}>
                  <h3>
                    <AlertOutlined /> About Me
                  </h3>
                  <div class="bts" style={{ marginLeft: "20px" }}>
                    <a
                      href={"/Saransh's CV.pdf"}
                      download
                      class="btn fill"
                      data-text="Download CV"
                    >
                      <DownloadOutlined /> Download CV
                    </a>
                  </div>
                </div>
              }
              description={
                <div>
                  {/* <p> */}
                  Hello! My name is Saransh Balyan and I enjoy creating things
                  that lives on the internet. My interest in web development
                  started back in 2015 when I decided to try blogging with
                  Wordpress— this taught me a lot about HTML & CSS! <br />
                  <br />
                  Fast-forward to today, and I've had the privilege of working
                  at a start-up,and few Clients. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients.
                  <br /> <br />
                  Here are a few technologies I've been working with recently:
                  <div style={{ display: "flex" }}>
                    <Tag color="volcano">
                      <FaReact size={13} style={{ paddingTop: "3px" }} />
                      React Js
                    </Tag>
                    <Tag color="volcano">
                      <DiJavascript1 size={13} style={{ paddingTop: "3px" }} />
                      Javascript
                    </Tag>
                    <Tag color="volcano">
                      <SiHtml5 size={13} style={{ paddingTop: "3px" }} />
                      HTML
                    </Tag>
                    <Tag color="volcano">
                      <FaCss3Alt size={13} style={{ paddingTop: "3px" }} />
                      CSS
                    </Tag>
                    <Tag color="volcano">
                      <FaLaravel size={12} style={{ paddingTop: "2px" }} />
                      Laravel
                    </Tag>
                  </div>
                  {/* </p> */}
                  <div class="info-list">
                    <ul>
                      <li>
                        <strong>Name:</strong> Saranash Balyan
                      </li>
                      <li>
                        <strong>Age:</strong> 22 Years
                      </li>
                      <li>
                        <strong>Job:</strong> ReactJs Developer
                      </li>
                      <li>
                        <strong>Citizenship:</strong> India
                      </li>
                      <li>
                        <strong>Residence: </strong> Delhi
                      </li>
                      <li style={{ whiteSpace: "nowrap" }}>
                        <strong>E-mail:</strong> saranshbalyan123@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />
          </Card>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  );
}
