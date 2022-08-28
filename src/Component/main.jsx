import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LandPAge from "./LandPAge";
import { useNavigate } from "react-router-dom";
import { FoodDetailscontext } from "../Context/FoodDetailscontext";

export const Main = () => {
  const navigate = useNavigate();
  const [all, setAll] = useState([]);
  const { setData, data } = useContext(FoodDetailscontext);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((e) => {
        // setData(e)
        setData(e.data);
        setAll(e.data);
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

  const handleFilter = (value) => {
    if (value === "Regular") {
      const result = all.filter(
        (item) => item.Menu_Category === "Regular Menu"
      );
      setData(result);
    } else if (value === "Breakfast") {
      const result = all.filter(
        (item) => item.Menu_Category === "Breakfast Menu"
      );
      setData(result);
    } else if (value === "McCafe") {
      const result = all.filter((item) => item.Menu_Category === "McCafe Menu");
      setData(result);
    } else if (value === "Gourmet") {
      const result = all.filter(
        (item) => item.Menu_Category === "Gourmet Menu"
      );
      setData(result);
    } else if (value === "Beverages") {
      const result = all.filter(
        (item) => item.Menu_Category === "Beverages Menu"
      );
      setData(result);
    } else if (value === "Condiments") {
      const result = all.filter(
        (item) => item.Menu_Category === "Condiments Menu"
      );
      setData(result);
    } else {
      setData(all);
    }
  };
  return (
    <div>
      <div
        style={{
          border: "20px",
          background: "black",
          borderWidth: "35px",
          background: "black",
          /* margin-top: 28%; */
          height: "97px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", padding: "2%" }}>
          <div
            style={{
              color: "white",
              width: "50%",
              // background: "white",
            }}
          >
            Food App
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              color: "white",
            }}
          >
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                // handler(row);
                navigate(`/favt`);
              }}
            >
              Favourite
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // marginTop: "2%",
          border: "1px solid black",
          height: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex - end",
            rowGap: "6px",
            columnGap: "20px",
            width: "40%",
          }}
        >
          <button onClick={() => handleSort("a")}>Asc</button>
          <button onClick={() => handleSort("d")}>Desc</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            columnGap: "20px",
            width: "60%",
          }}
        >
          <div>Filter By :-</div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("Regular")}
          >
            Regular Food
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("Breakfast")}
          >
            Breakfast
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("McCafe")}
          >
            McCafe
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("Gourmet")}
          >
            Gourmet
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("Beverages")}
          >
            Beverages
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("Condiments")}
          >
            Condiments
          </div>
          <div
            className="Fliter"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleFilter("all")}
          >
            All
          </div>
        </div>
      </div>

      <LandPAge />
    </div>
  );
};
