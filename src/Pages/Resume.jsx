import React from "react";
import {
  DownCircleOutlined,
  DownloadOutlined,
  AlertOutlined,
  Html5Outlined,
} from "@ant-design/icons";
import { FaReact, FaCss3Alt, FaLaravel, FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { Card, Tag } from "antd";

export default function Resume() {
  const { Meta } = Card;
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

      {/* <!-- About --> */}
      <div class="section about">
        <div class="content">
          <div class="title">
            {/* <div class="title_inner" style={{ marginLeft: "20px" }}>
              About Me
            </div> */}
          </div>
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
                        <DiJavascript1
                          size={13}
                          style={{ paddingTop: "3px" }}
                        />
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

      {/* <!-- Resume --> */}
      <div class="section resume">
        <div class="content">
          <div class="cols">
            <div class="col col-md">
              <div class="title">
                <div class="title_inner">Experience</div>
              </div>
              <div class="resume-items">
                <div class="resume-item active">
                  <div class="date">2013 - Present</div>
                  <div class="name">Art Director - Facebook Inc</div>
                  <p>
                    Morbi nulla arcu, pellentesque sed egestas in, tempor eget
                    felis. Nullam tincidunt augue in leo feugiat, quis interdum
                    nisi sollicitudin.
                  </p>
                </div>
                <div class="resume-item">
                  <div class="date">2011 - 2012</div>
                  <div class="name">Front-end Developer - Google Inc</div>
                  <p>
                    Duis ipsum ligula, feugiat nec auctor vitae, porta sit amet
                    urna. Praesent ex lorem, porta nec aliquet eu, ullamcorper
                    eget nibh.
                  </p>
                </div>
                <div class="resume-item">
                  <div class="date">2009 - 2010</div>
                  <div class="name">Senior Developer - Abc Inc</div>
                  <p>
                    Morbi nulla arcu, pellentesque sed egestas in, tempor eget
                    felis. Nullam tincidunt augue in leo feugiat, quis interdum
                    nisi sollicitudin.
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-md">
              <div class="title">
                <div class="title_inner">Education</div>
              </div>
              <div class="resume-items">
                <div class="resume-item">
                  <div class="date">2007 - 2008</div>
                  <div class="name">Art University of New York</div>
                  <p>
                    Morbi nulla arcu, pellentesque sed egestas in, tempor eget
                    felis. Nullam tincidunt augue in leo feugiat, quis interdum
                    nisi sollicitudin.
                  </p>
                </div>
                <div class="resume-item">
                  <div class="date">2004 - 2006</div>
                  <div class="name">Front-end Course</div>
                  <p>
                    Duis ipsum ligula, feugiat nec auctor vitae, porta sit amet
                    urna. Praesent ex lorem, porta nec aliquet eu, ullamcorper
                    eget nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Skills --> */}
      <div class="section skills">
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
      </div>

      {/* <!-- Skills --> */}
      <div class="section skills">
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
      </div>

      {/* <!-- Skills --> */}
      <div class="section skills">
        <div class="content">
          <div class="title">
            <div class="title_inner">Coding Skills</div>
          </div>
          <div class="skills circles">
            <ul>
              <li>
                <div class="name">WordPress</div>
                <div class="progress p90">
                  <div class="percentage" style={{ width: "90%" }}>
                    <span class="percent">90%</span>
                  </div>
                  <span>90%</span>
                </div>
              </li>
              <li>
                <div class="name">PHP / MYSQL</div>
                <div class="progress p75">
                  <div class="percentage" style={{ width: "75%" }}>
                    <span class="percent">75%</span>
                  </div>
                  <span>75%</span>
                </div>
              </li>
              <li>
                <div class="name">Angular / JavaScript</div>
                <div class="progress p85">
                  <div class="percentage" style={{ width: "85%" }}>
                    <span class="percent">85%</span>
                  </div>
                  <span>85%</span>
                </div>
              </li>
              <li>
                <div class="name">HTML / CSS</div>
                <div class="progress p95">
                  <div class="percentage" style={{ width: "95%" }}>
                    <span class="percent">95%</span>
                  </div>
                  <span>95%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Skills --> */}
      <div class="section skills">
        <div class="content">
          <div class="title">
            <div class="title_inner">Knowledge</div>
          </div>
          <div class="skills list">
            <ul>
              <li>
                <div class="name">Website hosting</div>
              </li>
              <li>
                <div class="name">iOS and android apps</div>
              </li>
              <li>
                <div class="name">Create logo design</div>
              </li>
              <li>
                <div class="name">Design for print</div>
              </li>
              <li>
                <div class="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div class="name">Advertising services include</div>
              </li>
              <li>
                <div class="name">Graphics and animations</div>
              </li>
              <li>
                <div class="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
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
