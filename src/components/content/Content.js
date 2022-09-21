import React, { useEffect, useState } from "react";
import "./Content.css";

import { useStateValue } from "../../redux/StateProvider";

function Content() {
  const [{ json_data, add_to_cart, searched_array }, dispatch] =
    useStateValue();

  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(json_data);
  }, [json_data]);

  useEffect(() => {
    setArr(searched_array);
  }, [searched_array]);

  useEffect(() => {
    setArr(json_data);
  }, []);

  const addToCard = (e) => {
    add_to_cart.push(e);
    dispatch({
      type: "ADD_TO_CART",
      item: { add_to_cart: [...new Set(add_to_cart)] },
    });
  };

  return (
    <div className="content">
      {arr &&
        arr.map((elem, index) => {
          return (
            <div className="card" key={index}>
              <div className="imgContainer">
                <img src={elem.imgUrl} alt="Avatar" className="imgCss" />
              </div>
              <div className="container">
                <h4>
                  <b>Rs. {elem.price}</b>
                </h4>
                <button onClick={() => addToCard(elem.id)} className="btnCss">
                  Add to Card
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Content;
