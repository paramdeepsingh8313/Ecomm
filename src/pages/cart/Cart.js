import React, { useState, useEffect, useRef } from "react";
import "./Cart.css";
import a from "../../assets/icons/cart.svg";
import { useStateValue } from "../../redux/StateProvider";

function Cart() {
  const [{ json_data, add_to_cart }, dispatch] = useStateValue();

  const [arrList, setArrList] = useState();

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

  function callMe(e) {
    let ar = [];
    for (let i = 1; i <= e; i++) {
      ar.push(i);
    }
    return ar;
  }

  let itemCountRef = useRef([]);

  function changeHandle(e) {
    let price = e[0];
    let qnty = e[1];
    let indx = e[2];
    let total = price * qnty;
    itemCountRef.current[indx].textContent = `Rs. ${total}`;
    return total;
  }

  return (
    <div className="cardComp">
      <h2>Shopping Cart</h2>
      <div className="cardCompContainer">
        {arrList &&
          arrList.map((elem, index) => {
            return (
              <>
                <div className="eachItem" key={index}>
                  <div className="eachItemImg">
                    <img src={elem.imgUrl} alt="no image" className="imgCss" />
                  </div>
                  <div className="description">
                    <h4>{elem.name}</h4>
                    <h4
                      key={index}
                      ref={(element) => {
                        itemCountRef.current[index] = element;
                      }}
                    >
                      Rs. {elem.price}
                    </h4>
                  </div>
                  <select
                    onChange={(e) =>
                      changeHandle([elem.price, e.target.value, index])
                    }
                  >
                    {callMe(elem.quantity).map((element, index) => (
                      <option key={index} value={element}>
                        {element}
                      </option>
                    ))}
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
