export const products = (data) => {
  return {
    type: "UPDATE_PRODUCT",
    products: data,
  };
};
export const selectedCatagory = (id) => {
  return {
    type: "UPDATE_SELECTED_CATAGORY",
    catagoryId: id,
  };
};
