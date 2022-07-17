import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import PreLoader from "./PreLoader";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";

export default function Layout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("saransh", document.getElementsByTagName("body")[0]);
    setTimeout(() => {
      document.getElementsByTagName("body")[0].className = "loaded";
      setLoading(false);
    }, 800);
  }, []);
  return (
    <>
      {loading && <PreLoader />}

      <div class="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
        <div class="line top"></div>
        <div class="line bottom"></div>
        <div class="line left"></div>
        <div class="line right"></div>
      </div>
      <BackTop
        style={{ zIndex: 1000, marginBottom: "40px", marginRight: "-50px" }}
      />
    </>
  );
}
