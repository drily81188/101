import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
import { FoodDetailscontext } from "../Context/FoodDetailscontext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Details = () => {
  const { list } = useContext(FoodDetailscontext);
  // console.log(list);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {list.Menu_Items}
          </Typography>
          <Typography variant="h5" component="div">
            Per_Serve_Size {list.Per_Serve_Size}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Energy_kCal:{list.Energy_kCal}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Protein_g:{list.Protein_g}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total_fat_g:{list.Total_fat_g}
          </Typography>

          <Typography variant="body2">
            {/* well meaning and kindly. */}
            <br />
            {/* {'"a benevolent smile"'} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Details;
