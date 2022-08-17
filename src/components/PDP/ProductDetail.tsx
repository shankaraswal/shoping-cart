import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ProductCard } from "../ProductCard/ProductCard";
import { Container } from "@material-ui/core";

import { fetchProductsListing } from "../../actions/ProductsListingsAction";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sss: {
    marginTop: "5rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ProductDetail = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={(classes.root, classes.sss)}>
        <Grid container spacing={3}>
          adfas
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetail;
