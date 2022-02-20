import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productServices from "../../services/product-service";
import DetailDescription from "../detail-description/detail-description";
function ProductPage({ text = "pro" }) {
  const { productId } = useParams();
  const [model,setModel]=useState({})
  const [status,setStatus]=useState('')
  const getProducts = () => {
    setStatus('Loading....')
    productServices
      .getProductDescription(productId)
      .then((res) => {
        setStatus('')
       setModel(res.data)
      })
      .catch((err) => {
        err?.response?.status==404?setStatus('Not Found'):setStatus('Someting went wrong')
        console.log(
          err.response.data?.message ? err.response.data?.message : err.message
        );
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div>
    {Object.keys(model).length>0?<DetailDescription model={model}/>:<div className="mt-5 text-center">{status}</div>}
  </div>
}

export default ProductPage;
