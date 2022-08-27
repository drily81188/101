import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LandPAge from "./LandPAge";

export const Main = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((e) => {
        // setData(e)
        setData(e.data);
        console.log(e.data);
      });
  }, []);

  const handleSort = (value) => {
    const sorted = data.sort((a, b) => {
      return value == "a"
        ? a.Menu_Items.localeCompare(b.Menu_Items)
        : b.Menu_Items.localeCompare(a.Menu_Items);
    });
    setNewData(sorted);
  };
  return (
    <div>
      <button onClick={() => handleSort("a")}>Asc</button>
      <button onClick={() => handleSort("d")}>Desc</button>
      <LandPAge data={newData.length > 0 ? newData : data} />
    </div>
  );
};
