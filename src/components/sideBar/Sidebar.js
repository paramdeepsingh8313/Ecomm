import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useStateValue } from "../../redux/StateProvider";

function Sidebar() {
  const [{ filter_types }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      {filter_types &&
        Object.entries(filter_types).map((item, index) => {
          return (
            <div key={index} className="sideBarItem">
              <h4>{item[0]}</h4>
              <>
                {item[1].map((elem) => {
                  return (
                    <>
                      <input
                        type="radio"
                        id={elem}
                        name={item[0]}
                        value={elem}
                      />
                      <label htmlFor={elem}> {elem}</label>
                      <br></br>
                      <br />
                    </>
                  );
                })}
              </>
            </div>
          );
        })}
    </div>
  );
}

export default Sidebar;
