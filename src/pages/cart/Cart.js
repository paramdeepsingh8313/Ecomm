import React, { useState, useEffect, useRef } from "react";
import "./Cart.css";
import a from "../../assets/icons/cart.svg";
import { useStateValue } from "../../redux/StateProvider";

function Cart() {
  const [{ json_data, add_to_cart }, dispatch] = useStateValue();

  const [arrList, setArrList] = useState();

  let initialValue = 1;
  // const itemCount = useRef(initialValue);

  function ResheshArray() {
    let itemList = [];
    add_to_cart &&
      add_to_cart.map((item) => {
        json_data &&
          json_data.map((elem, index) => {
            if (elem.id === item) {
              itemList.push(elem);
            }
          });
      });

    setArrList(itemList);
  }

  useEffect(() => {
    ResheshArray();
  }, []);

  useEffect(() => {
    ResheshArray();
  }, [add_to_cart]);

  const handleDel = (e) => {
    let filt = add_to_cart.filter((item) => item !== e);

    dispatch({
      type: "ADD_TO_CART",
      item: { add_to_cart: filt },
    });
    ResheshArray();
  };

  return (
    <div className="cardComp">
      <h2>Shopping Cart</h2>
      <div className="cardCompContainer">
        {arrList &&
          arrList.map((elem, index) => {
            return (
              <>
                <div className="eachItem">
                  <div className="eachItemImg">
                    <img src={elem.imgUrl} alt="no image" className="imgCss" />
                  </div>
                  <div className="description">
                    <h4>{elem.name}</h4>
                    <h4>Rs. {elem.price}</h4>
                  </div>
                  <select disabled>
                    <option>Qty: {initialValue}</option>
                  </select>
                  <button onClick={() => handleDel(elem.id)}>Delete</button>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
