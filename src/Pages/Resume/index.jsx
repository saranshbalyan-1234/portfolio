import React from "react";
import { DownCircleOutlined, ProfileOutlined } from "@ant-design/icons";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import { Progress } from "antd";
export default function Resume() {
  return (
    <div class="wrapper">
      <div class="section started" style={{ minHeight: "90vh" }}>
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="started-content">
              <div class="h-title glitch-effect" data-text="Resume">
                Resume
              </div>
              <div class="h-subtitle typing-bread">
                <p>
                  <a href="index.html">Home</a> /{" "}
                  <a href="resume.html">Resume</a>
                </p>
              </div>
              <span class="typed-bread"></span>
            </div>
          </div>
        </div>
        <a
          href={() => {
            return false;
          }}
          class="mouse_btn"
          // style={{ marginTop: "200px" }}
        >
          <span class="ion ">
            <DownCircleOutlined />
          </span>
        </a>
      </div>
      <AboutMe />
      {/* <!-- Resume --> */}
      <div class="section resume">
        <div class="content">
          <div class="cols">
            <Experience />
            <Education />
          </div>
        </div>
      </div>

      {/* <!-- Skills --> */}
      {/* <div class="section skills">
        <div class="content">
          <div class="title">
            <div class="title_inner">Design Skills</div>
          </div>
          <div class="skills">
            <ul>
              <li>
                <div class="name">Web Design</div>
                <div class="progress">
                  <div class="percentage" style={{ width: "70%" }}>
                    <span class="percent">70%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">Illustrations</div>
                <div class="progress">
                  <div class="percentage" style={{ width: "90%" }}>
                    <span class="percent">90%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">Photoshop</div>
                <div class="progress">
                  <div class="percentage" style={{ width: "75%" }}>
                    <span class="percent">75%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">Graphic Design</div>
                <div class="progress">
                  <div class="percentage" style={{ width: "80%" }}>
                    <span class="percent">80%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <!-- Skills --> */}
      {/* <div class="section skills">
        <div class="content">
          <div class="title">
            <div class="title_inner">Languages Skills</div>
          </div>
          <div class="skills dotted">
            <ul>
              <li>
                <div class="name">English</div>
                <div class="progress">
                  <div class="percentage" style={{ width: "90%" }}>
                    <span class="percent">90%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">German</div>
                <div class="progress ">
                  <div class="percentage" style={{ width: "70%" }}>
                    <span class="percent">70%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">Italian</div>
                <div class="progress ">
                  <div class="percentage" style={{ width: "55%" }}>
                    <span class="percent">55%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="name">French</div>
                <div class="progress ">
                  <div class="percentage" style={{ width: "85%" }}>
                    <span class="percent">85%</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div class="section service">
        <div class="content">
          <h3 style={{ marginBottom: "20px" }}>
            <ProfileOutlined style={{ marginRight: "5px" }} />
            Skills
          </h3>{" "}
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={80}
            format={() => "React JS"}
          />
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={70}
            format={() => "HTML"}
          />
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={75}
            format={() => "CSS"}
          />
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={75}
            format={() => "JS"}
          />
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={70}
            format={() => "Redux"}
          />
          <Progress
            style={{ marginRight: "20px", marginBottom: "20px" }}
            type="circle"
            percent={60}
            format={() => "MySQL"}
          />
        </div>
      </div>

      {/* <!-- Service --> */}
      <div class="section service">
        <div class="content">
          <div class="title">
            <div class="title_inner">My Services</div>
          </div>
          <div class="service-items">
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-social-html5"></span>
              </div>
              <div class="name">Front-end</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-ipad"></span>
              </div>
              <div class="name">Mobile Application</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-ios-search-strong"></span>
              </div>
              <div class="name">Investigation</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-code"></span>
              </div>
              <div class="name">Programming</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-help-buoy"></span>
              </div>
              <div class="name">Awesome Supports</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
            <div class="service-item">
              <div class="icon">
                <span class="ion ion-social-chrome"></span>
              </div>
              <div class="name">Web Development</div>
              <p>Morbi nulla arcu, pellentesque sed egestas in.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Clients --> */}
      <div class="section clients">
        <div class="content">
          <div class="title">
            <div class="title_inner">Clients</div>
          </div>
          <div class="box-items">
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_1.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_2.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_3.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_1.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_2.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="box-item">
              <div class="image">
                <a target="_blank" href="https://www.google.com">
                  <img src="images/clients/client_3.png" alt="" />
                  <span class="info">
                    <span class="centrize full-width">
                      <span class="vertical-center">
                        <span class="ion ion-link"></span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  );
}
