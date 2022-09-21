import { useState, useEffect } from "react";
import "./App.css";
import { useStateValue } from "./redux/StateProvider";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [{ filter_types, json_data }, dispatch] = useStateValue();

  const [arrayData, setArrayData] = useState();

  useEffect(() => {
    let url = "http://localhost:3001/data";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setArrayData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const [filt, setFilt] = useState({
    gender: [],
    color: [],
    price: [],
    type: [],
  });

  let setFilt1 = {};
  let gender = [];
  let color = [];
  let price = [];
  let type = [];

  useEffect(() => {
    if (arrayData) {
      dispatch({
        type: "JSON_DATA",
        item: { json_data: arrayData },
      });
    }

    if (arrayData) {
      arrayData.map((item) => {
        gender.push(item.gender);
        color.push(item.color);
        price.push(item.price);
        type.push(item.type);
      });
    }
    setFilt1["gender"] = [...new Set(gender)];
    setFilt1["color"] = [...new Set(color)];
    setFilt1["price"] = [...new Set(price)];
    setFilt1["type"] = [...new Set(type)];

    setFilt(setFilt1);

    dispatch({
      type: "FILTER_TYPES",
      item: { filter_types: filt },
    });
  }, [arrayData]);

  return (
    <div className="App">
      <div className="headerComp">
        <Header />
      </div>
      <div className="bodyComp">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
