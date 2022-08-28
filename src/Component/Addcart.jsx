import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";

import { FavtItemsContext } from "../Context/FavtItemsContext";
import { useNavigate } from "react-router-dom";

export const Addcart = () => {
  const { empty } = useContext(FavtItemsContext);
  const navigate = useNavigate();
  return (
    <>
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>menu</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">fat</TableCell>

              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {empty.map((row) => (
              <TableRow
                key={row.Id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Menu_Items}
                </TableCell>
                <TableCell align="right">{row.Menu_Category}</TableCell>
                <TableCell align="right">{row.Total_fat_g}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
