import { useEffect } from "react";
import "./App.css";
import WebsiteLayout from "./component/layout/layout";
import { connect } from "react-redux";
import ProductListItem from "./component/product-list-item/product-list-item";
function App({ productList, catagoryId }) {
  return (
    <WebsiteLayout filter>
      <main className="my-4">
        <section className="mb-3">
          <h1>Products</h1>
          {Array.isArray(productList) ? (
            <small className="small">items: {productList.filter((val) => val.categoryId == catagoryId || !catagoryId).length}</small>
          ) : null}
        </section>
        <section className="row mx-md-4 mt-4">
          {Array.isArray(productList) &&
            productList
              .filter((val) => val.categoryId == catagoryId || !catagoryId)
              .map((val) => {
                return (
                  <div className="col-md-4 col-sm-6 col-12 mb-5 ">
                    <ProductListItem model={val} />
                  </div>
                );
              })}
        </section>
      </main>
    </WebsiteLayout>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
    catagoryId: state.catagoryId,
  };
};

export default connect(mapStateToProps)(App);
