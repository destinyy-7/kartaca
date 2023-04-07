import * as React from "react";
import ProductCard from "../pages/ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { ProductApiAction } from "../redux/actions/Product";
import { useEffect } from "react";

const ProductList = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductApiAction());
  }, [dispatch]);
  return (
    <div>
      {" "}
      <Box sx={{ width: "100%" }}>
      <Grid 
          container spacing={3}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}

        >
          {state.products
            ? state.products.map((product, index) => (
              <Grid >
                  <ProductCard key={index} product={product} index={index} />
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductList;
