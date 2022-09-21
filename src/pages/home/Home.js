import React from "react";
import "./Home.css";
import Sidebar from "../../components/sideBar/Sidebar";
import Content from "../../components/content/Content";
import Search from "../../components/search/Search";

function Home() {
  return (
    <>
      <div className="searchComp">
        <Search />
      </div>
      <div className="contentComp">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Home;
