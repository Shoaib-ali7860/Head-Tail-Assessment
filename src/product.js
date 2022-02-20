import { useEffect } from "react";
import "./App.css";
import WebsiteLayout from "./component/layout/layout";
import { useParams, useNavigate } from "react-router-dom";
function Product({ text = "pro", children }) {
  let navigate = useNavigate();
  const { productId } = useParams();
  useEffect(() => {
    if (productId == undefined) navigate("/");
  });
  return <WebsiteLayout>
    <h1 className="mt-4">Product Details Summary</h1>
    {children}
    </WebsiteLayout>;
}

export default Product;
