import axios from "axios";
import { CATAGORIES, PRODUCTS, PRODUCTS_DESC } from "../utils/constant";

 class productServices {
  static getCatagories() {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(CATAGORIES, httpOptions);
  }
  static getProduct() {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(PRODUCTS, httpOptions);
  }
  static getProductDescription(id) {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios.get(PRODUCTS_DESC.replace('{{id}}',id), httpOptions);
  }
}
export default productServices