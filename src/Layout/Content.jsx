import React from "react";

export default function Content() {
  return (
    <div class="wrapper">
      <div class="section started">
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="started-content">
              <div class="h-title glitch-effect" data-text="I'm Saransh Balyan">
                I'm <span>Saransh Balyan {`</>`}</span>
              </div>
              <div class="h-subtitle typing-subtitle">
                <p style={{ fontSize: "20px" }}>React Js Developer</p>
                <p style={{ fontSize: "20px" }}>Fronend Developer</p>
                <p style={{ fontSize: "20px" }}>JavaScript Developer</p>
              </div>
              <span class="typed-subtitle" style={{ fontSize: "20px" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
