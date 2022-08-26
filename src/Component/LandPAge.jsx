import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { FoodDetailscontext } from "../Context/FoodDetailscontext";
import { Button, IconButton } from "@mui/material";
import { FavtItemsContext } from "../Context/FavtItemsContext";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const LandPAge = ({ data }) => {
  const navigate = useNavigate();
  const { setList } = useContext(FoodDetailscontext);
  const { handler } = useContext(FavtItemsContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>menu</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">fat</TableCell>
            <TableCell align="right">Farvotie</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                onClick={() => {
                  navigate(`/details`);
                  setList(row);
                }}
              >
                {row.Menu_Items}
              </TableCell>
              <TableCell align="right">{row.Menu_Category}</TableCell>
              <TableCell align="right">{row.Total_fat_g}</TableCell>
              <Button
                onClick={() => {
                  handler(row);
                  navigate(`/favt`);
                }}
                align="right"
              >
                addCart
              </Button>
              {/* <TableCell align="right">{row.protein}</TableCell>  */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LandPAge;
