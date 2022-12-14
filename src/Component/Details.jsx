// import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FoodDetailscontext } from "../Context/FoodDetailscontext";
import { useContext, useState } from "react";
import { FavtItemsContext } from "../Context/FavtItemsContext";
import { useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Details() {
  const [expanded, setExpanded] = useState(false);
  const { list } = useContext(FoodDetailscontext);
  const { handler } = useContext(FavtItemsContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {list.Menu_Items}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {list.Menu_Category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {list.Per_Serve_Size}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            onClick={() => {
              handler(list);
            }}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Protein_g -{list.Protein_g}</Typography>
          <Typography paragraph>Sat_Fat_g -{list.Sat_Fat_g}</Typography>
          <Typography paragraph>Sodium_mg -{list.Sodium_mg}</Typography>
          <Typography>Total_Sugars_g -{list.Total_Sugars_g}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
