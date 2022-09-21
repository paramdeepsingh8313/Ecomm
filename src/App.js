import { useState, useEffect } from "react";
import "./App.css";
import { useStateValue } from "./redux/StateProvider";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

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

  useEffect(() => {
    if (arrayData) {
      dispatch({
        type: "JSON_DATA",
        item: { json_data: arrayData },
      });
      let a = ["Gender", "Color", "Price range", "Type"];
      dispatch({
        type: "FILTER_TYPES",
        item: { filter_types: filt },
      });
    }
  }, [arrayData]);

  console.log("filter_types", filter_types, json_data);

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
