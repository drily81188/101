import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LandPAge from "./LandPAge";

export const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((e) => {
        // setData(e)
        setData(e.data);
        console.log(e.data);
      });
  }, []);
  return (
    <div>
      <LandPAge data={data} />
    </div>
  );
};
