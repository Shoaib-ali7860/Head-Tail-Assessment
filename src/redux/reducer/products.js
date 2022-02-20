let localState = [];
function products(state = localState, action) {
  
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return action.products;
    default:
      return state;
  }
}
export default products;
