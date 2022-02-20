let localState = "";
function selectedCatagory(state = localState, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_CATAGORY":
      return action.catagoryId;
    default:
      return state;
  }
}
export default selectedCatagory;
