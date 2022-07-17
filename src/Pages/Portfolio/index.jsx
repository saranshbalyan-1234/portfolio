import React from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import Cards from "./Cards";

export default function Portfolio() {
  return (
    <div class="wrapper">
      <div class="section started" style={{ minHeight: "90vh" }}>
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="started-content">
              <div class="h-title glitch-effect" data-text="Portfolio">
                Portfolio
              </div>
              <div class="h-subtitle typing-bread">
                <p>
                  <a href="/">Home</a> / <a href="#">Portfolio</a>
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
        >
          <span class="ion ">
            <DownCircleOutlined />
          </span>
        </a>
      </div>

      <div class="section works">
        <div class="content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 30,
            }}
          >
            <Cards
              title="Advanced Swagger"
              description={
                <p>
                  Customizable API documentation <br />
                  Built over SWAGGER and OPEN API <br />
                  Technology Used: React JS, Laravel
                </p>
              }
              link="https://rcswagger.herokuapp.com"
            />
            <Cards
              title="Better Quality Automation"
              description={
                <p>
                  This project is completely based on SELENIUM which is an
                  automation tool for browsers.
                  <br />
                  Technology Used: React JS, Spring, Selenium
                </p>
              }
              link="https://betterprocessquality.com"
            />

            <Cards
              title="Rc TeamBuilder"
              description={
                <p>
                  This project is a complete Human Capital Management including
                  Assessment, Interview, Onboarding, TimeSheet, Performance And
                  Management.
                  <br />
                  Technology Used: React JS, Laravel, Node Js, Spring
                </p>
              }
              link="https://rcteambuilder.com"
            />
            <Cards
              title="Blood Bank"
              description={
                <p>
                  This portal is made for an NGO called KanchanDevi Memorial
                  Trust. Here you can request and donate blood and can also work
                  as a volunteer to support our team.
                  <br />
                  Technology Used: React JS, Laravel
                </p>
              }
              link="https://lalindia.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
