import React from "react";
import { HighlightOutlined } from "@ant-design/icons";
export default function Experience() {
  return (
    <div class="col col-md">
      <div class="title">
        {/* <div class="title_inner">Experience</div> */}
        <h3>
          <HighlightOutlined style={{ marginRight: "5px" }} />
          Experience
        </h3>
      </div>
      <div class="resume-items">
        <div class="resume-item active">
          <div class="date">12/2021 - Present</div>
          <div class="name">React JS Developer: KDIT Solutions INC</div>
          <p>
            KDIT Solutions scales up intelligent automation for digital
            enterprises by enhancing Quality for IBM Maximo, Sage X3 ERP, SAP,
            Oracle JDE ERP, Oracle Cloud ERP, Oracle Utilities, Microsoft
            Dynamics ERR/CRM and its integrated enterprise systems.
            <br /> Technologies Used: React Js, HTML,CSS,Javascript
          </p>
        </div>
        <div class="resume-item">
          <div class="date">11/2021 - Present</div>
          <div class="name">React Js Developer: Zivost Technologies</div>
          <p>
            Zivost started with a bunch of passionate techies in 2016 in New
            Delhi, India, and now have grown into a splendid family spread all
            across India, catering to over 50 customers worldwide. <br />
            Technologies Used: React Js, HTML,CSS,Javascript
          </p>
        </div>
        <div class="resume-item">
          <div class="date">02/2021 - Present</div>
          <div class="name">Full Stack Developer</div>
          <p>
            RealcoderZ is a nnovative talent intelligence software with AI based
            recruitment, skill assessments, skill development, and employee
            engagement organization. <br />
            Technologies Used: React Js, HTML,CSS,Javascript,Laravel
          </p>
        </div>
      </div>
    </div>
  );
}
