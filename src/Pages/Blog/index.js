import React from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import Cards from "../../Common/Cards";

export default function Blog() {
  return (
    <div class="wrapper">
      <div class="section started" style={{ minHeight: "90vh" }}>
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="started-content">
              <div class="h-title glitch-effect" data-text="Blog">
                Blog
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
          <Cards
            // width={400}
            title="All about Chunk Files You Need To Know In React!"
            description={
              <p>
                Here you will learn, how to see whats inside chunk files and how
                to play with them.
              </p>
            }
            link="/chunkFiles"
          />
        </div>
      </div>
    </div>
  );
}
