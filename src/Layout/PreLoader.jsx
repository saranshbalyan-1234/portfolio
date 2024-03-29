import React from "react";
import "../App.css";
export default function PreLoader() {
  return (
    <div class="preloader">
      <div class="centrize full-width">
        <div class="vertical-center">
          <div class="pre-inner">
            <div class="load typed-load typewriter">
              <p>loading...</p>
            </div>

            <span class="typed-load"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
