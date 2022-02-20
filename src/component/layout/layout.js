import "./layout.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import productServices from "../../services/product-service";
import { connect } from "react-redux";
import { selectedCatagory, products } from "../../redux/redux-action/action";
import { useState } from "react";
function WebsiteLayout({
  children,
  filter = false,
  updateProduct,
  productSelect,
  productList,
}) {
  const [filterList, setFilterList] = useState([]);
  const [filterSelected, setFilter] = useState("");
  const [status,setStatus]=useState('')
  const getProducts = () => {
    setStatus('Loading....')
    productServices
      .getProduct()
      .then((res) => {
        setStatus('')
        updateProduct(res.data);
 
      })
      .catch((err) => {
        setStatus('Something went wrong.')
        console.log(
          err.response.data?.message ? err.response.data?.message : err.message
        );
      });
  };
  const getCatagories = () => {
    productServices
      .getCatagories()
      .then((res) => {
        setFilterList(res.data);
      })
      .catch((err) => {
        console.log(
          err.response.data?.message ? err.response.data?.message : err.message
        );
      });
  };
  useEffect(() => {
    //for using of redux i used api calling in header
    getProducts();
    getCatagories();
  }, []);

  return (
    <div>
      <header className="w-100 py-3 bg-info d-sm-flex justify-content-between align-items-center ">
        {/* <a href="/" className="text-dark text-decoration-none"> */}
        <Link to="/" className='text-decoration-none text-dark'>
          <div className="d-flex align-items-center ">
            <img
              src="/logo192.png"
              className="img-thumbnail mx-2"
              alt="company-logo"
              width="40"
            />
            <div className="companyName">React Assessment</div>
          </div>
        </Link>
        {/* </a> */}
        {filter ? (
          <div className="d-flex align-items-center me-2 mt-3 mt-sm-0">
            <div className="text-dark mx-2">
              <b>Filters</b>
            </div>
            <select onChange={(e)=>{
           
              setFilter(e.target.value)
              productSelect(e.target.value)


            }} value={filterSelected} className="filterList p-1 " style={{minWidth:150}}>
              <option value="">{filterSelected==''?'select Catagory':'Clear Filter'}</option>
              {Array.isArray(filterList) &&
                filterList.map((val) => {
                  return (
                    <option key={val.id} value={val.id}>
                      {val.name}
                    </option>
                  );
                })}
            </select>
          </div>
        ) : null}
      </header>
      <div className="container website-container">{Array.isArray(productList) && productList.length>0?children:<div className="mt-5 text-center"> {status}</div>}</div>
      <footer className="bg-secondary p-5 text-white">
        <div>
          <b>Footer Dummy</b>
        </div>
        <div className="mt-2">About Us</div>
        <div className="mt-2">Contact Us</div>
      </footer>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (data) => dispatch(products(data)),
    productSelect: (id) => dispatch(selectedCatagory(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteLayout);
