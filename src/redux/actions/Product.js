import axios from "axios";

//getallapiiiii------------------------------------------------------------------------------
export const ProductApiAction = () => {
  return (dispatch) => {
    axios
      .get("/products/getall")
      .then((resp) => dispatch({ type: "GET_PRODUCTS", payload: resp.data }));
  };
};
export const GetOneProduct = (productId) => {
  return (dispatch) => {
    axios
      .get(`products/${productId}`)
      .then((resp) => dispatch({ type: "GET_OneProduct", payload: resp.data }));
  };
};
