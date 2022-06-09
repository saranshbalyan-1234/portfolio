import React from "react";
import { DownCircleOutlined, AlertOutlined } from "@ant-design/icons";
import { Card } from "antd";

export default function Portfolio() {
  const { Meta } = Card;
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
                  <a href="index.html">Home</a> /{" "}
                  <a href="portfolio.html">Portfolio</a>
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
            }}
          >
            <Card
              className="handleHover"
              hoverable
              style={{ width: 300 }}
              onClick={() => {
                window.open("https://rcswagger.herokuapp.com");
              }}
            >
              <Meta
                title={
                  <h3>
                    <AlertOutlined /> Advanced Swagger
                  </h3>
                }
                description={
                  <p>
                    Customizable API documentation <br />
                    Built over SWAGGER and OPEN API <br />
                    Technology Used: React JS, Laravel
                  </p>
                }
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
