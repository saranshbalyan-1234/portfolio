import React from "react";
import {
  DownCircleOutlined,
  ProfileOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import { Progress, Timeline, Tag } from "antd";
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
                  <a href="/">Home</a> / <a href="#">Resume</a>
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

      <div class="section clients">
        <div class="content">
          <div style={{ display: "flex" }}>
            {" "}
            <h3>Projects</h3>
            {/* <Tag color="magenta">Check Portfolio</Tag> */}
          </div>
          <Timeline>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Project: Better Quality Automation Project
              <br />
              Technology Used: Selemium, Spring and React Js
              <br />
              Organization: KDIT Solutions <br />
              Website:{" "}
              <a href="https://betterprocessquality.com">
                Better Process Quality
              </a>
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              Project: Advance Swagger
              <br />
              Technology Used: Laravel and React Js
              <br />
              Organization: Self <br />
              Website:{" "}
              <a href="https://rcwagger.herokuapp.com">Advance Swagger</a>
            </Timeline.Item>

            <Timeline.Item>
              Project: RC TeamBuilder
              <br />
              Technology Used: Spring, Laravel, Node Js, React Js
              <br />
              Organization: Realcoderz <br />
              Website: <a href="https://rcteambuilder.com">RC TeamBuilder</a>
            </Timeline.Item>
            <Timeline.Item>
              Project: Blood Bank
              <br />
              Technology Used: Laravel and React Js
              <br />
              Organization: Realcoderz <br />
              Website: <a href="https://lalindia.com">Lal India</a>
            </Timeline.Item>
            <Timeline.Item>
              Attendace Manegment Using Geolocation <br />
              Organization: Realcoderz
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
