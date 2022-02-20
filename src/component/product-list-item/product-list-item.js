import { memo, useEffect } from "react";
import "./product-list-item.css";
import { useNavigate } from "react-router-dom";
function ProductListItem({ model = {} }) {
  let navigate = useNavigate();
  return (
    <div className="rounded bg-light position-relative overflow-hidden text-dark pb-5">
      {/* there is no image url in api response so i place it hard coded */}
      <div className="image-container" />
      <div className="p-3">
        <h2>{model.name}</h2>
        <div className="d-flex ">
          <div>
            <b>Model:</b>
          </div>
          <div className="ms-1 mt-0">{model?.model}</div>
        </div>
        <div className="d-flex ">
          <div>
            <b>Price:</b>
          </div>
          <div className="ms-1 mt-0">
            {!isNaN(model?.price) ? Math.round(model?.price).toFixed(2) : ""}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/product/${model.id}`);
          }}
          className="btn  btn-primary position-absolute"
          style={{ bottom: 10, right: 10 }}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default memo(ProductListItem);
