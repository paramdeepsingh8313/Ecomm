import React, { useEffect, useState } from "react";
import "./Search.css";
import search from "../../assets/icons/search.svg";
import filter from "../../assets/icons/filter.svg";
import { useStateValue } from "../../redux/StateProvider";

function Search() {
  const [{ json_data }, dispatch] = useStateValue();

  const [searched, setSearched] = useState("");

  const [newArr, setNewArr] = useState();

  function handleInput(e) {
    // setSearched(e.target.value);
    console.log("json_data", json_data);
    let a = [];
    json_data &&
      json_data.map((ele, index) => {
        if (
          ele?.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          ele?.color.toLowerCase().includes(e.target.value.toLowerCase()) ||
          ele?.type.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          a.push(ele);
        }
      });
    setNewArr(a);
  }

  useEffect(() => {
    if (newArr) {
      dispatch({
        type: "SEARCHED_ARRAY",
        item: { searched_array: newArr },
      });
    }
  }, [newArr]);

  return (
    <div>
      <input
        type="text"
        name="searchInput"
        className="srchInp"
        placeholder="Search for Products"
        onChange={handleInput}
      />
      <img
        src={search}
        alt="search logo"
        style={{ width: "2%", height: "2%" }}
        className="SearchImg"
      />
      <img
        src={filter}
        alt="search logo"
        style={{ width: "2%", height: "2%" }}
        className="filterImg"
      />
    </div>
  );
}

export default Search;
