import React, { useEffect } from "react";

export default function Content() {
  const texts = [
    "ReactJS Developer",
    "Front-End Developer",
    "Javascript Developer",
  ];
  const speed = 110;
  const pause = 800; // <--- the longer delay between text direction changes

  function typeWriter(i = 0, index = 1, direction = 1) {
    let displayed = texts[i].slice(0, index);
    document.querySelector("#demo").textContent = displayed;

    if (displayed.length >= texts[i].length) {
      // start removing after pause
      setTimeout(() => typeWriter(i, index - 1, -1), pause);
    } else if (displayed.length === 0) {
      // go to next text after pause
      setTimeout(() => typeWriter((i + 1) % texts.length), pause);
    } else {
      // continue in the current direction
      setTimeout(() => typeWriter(i, index + direction, direction), speed);
    }
  }
  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div class="wrapper">
      <div class="section started">
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="started-content">
              <div class="h-title glitch-effect" data-text="I'm Saransh Balyan">
                I'm <span>Saransh Balyan {`</>`}</span>
              </div>

              <p style={{ fontSize: "20px" }} id="demo"></p>
              <span class="typed-subtitle" style={{ fontSize: "20px" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
