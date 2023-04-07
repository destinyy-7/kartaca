const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_OneProduct":
      return { ...state, oneproduct: action.payload };
     
    default:
      return state;
  }
};

export default ProductReducer;
