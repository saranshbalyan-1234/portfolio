import React from "react";
import { EditOutlined } from "@ant-design/icons";
export default function Education() {
  return (
    <div class="col col-md">
      <div class="title">
        {/* <div class="title_inner">Education</div> */}
        <h3>
          <EditOutlined style={{ marginRight: "5px" }} />
          Education
        </h3>
      </div>
      <div class="resume-items">
        <div class="resume-item">
          <div class="date">2017 - 2021</div>
          <div class="name">
            Bachelor Of Technologies <br />
            (Computer Science Engineering)
          </div>
          <p>
            College: Dr. Akhilesh Das Gupta Institute Of Technology And
            Management (Formerly known as Northern India Institute Of Technology
            And Management)
            <br />
            <br />
            University: Guru Gobind Singh IndraPrastha University
            <br />
            <br />
            CGPA: 8.2
          </p>
        </div>
        <div class="resume-item">
          <div class="date">2016 - 2017</div>
          <div class="name">Class 12</div>
          <p>
            School: Govt. Boys Sr. Sec. School No. 2
            <br />
            <br />
            Marks: 92.75%
          </p>
        </div>
        <div class="resume-item">
          <div class="date">2014 - 2015</div>
          <div class="name">Class 10</div>
          <p>
            School: Rastra Shakti Vidyalaya
            <br />
            <br />
            CGPA: 9.6
          </p>
        </div>
      </div>
    </div>
  );
}
