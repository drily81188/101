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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Details from "./Details";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const LandPAge = () => {
  const navigate = useNavigate();
  const { setList, data } = useContext(FoodDetailscontext);
  const { handler } = useContext(FavtItemsContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <RestaurantMenuIcon />
                Menu
              </TableCell>
              <TableCell align="right">
                <CategoryIcon />
                Category
              </TableCell>
              <TableCell align="center">
                <FavoriteBorderIcon />
                Favourite
              </TableCell>
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
                    handleOpen();
                    setList(row);
                  }}
                >
                  <b> {row.Menu_Items}</b>
                </TableCell>
                <TableCell align="right">
                  <i>{row.Menu_Category}</i>
                </TableCell>
                <Button
                  onClick={() => {
                    handler(row);
                    // navigate(`/favt`);
                  }}
                  style={{
                    alignContent: "center",
                    border: "2px",
                    borderColor: "black",
                  }}
                >
                  Favourite
                </Button>
                {/* <TableCell align="right">{row.protein}</TableCell>  */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Details />
        </Box>
      </Modal>
    </>
  );
};

export default LandPAge;
