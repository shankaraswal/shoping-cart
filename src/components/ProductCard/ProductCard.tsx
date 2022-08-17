import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchProductDetail } from "../../actions/ProductDetailAction";

const useStyles = makeStyles({
  root: {
    minHeight: "30rem",
  },
});

export const ProductCard = ({ item }: any): any => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleViewProductDetail = (e: React.SyntheticEvent) => {
    const pid = e.currentTarget.id;
    console.log(pid);
    dispatch(fetchProductDetail(pid));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.title}
          image={item.thumbnail}
          title={item.title}
          height="200"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {item.title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: £{item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
        <Button
          id={item.id}
          variant="contained"
          color="secondary"
          onClick={handleViewProductDetail}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};
