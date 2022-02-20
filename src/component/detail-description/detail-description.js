import { memo, useEffect } from "react";
import "./detail-description.css";
import { useNavigate } from "react-router-dom";
function ProductDescription({ model = {} }) {
  let navigate = useNavigate();
  return (
    <div className="rounded bg-light  position-relative overflow-hidden text-dark d-md-flex pb-0 mt-3">
      {/* there is no image url in api response so i place it hard coded */}
      <div className="detail-image-container  col-md-6 col-lg-4" />
      <div className="p-3 col-md-6 col-lg-8">
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
        <div className="d-flex ">
       
          <div className=" mt-0">
          <b>Descrition:</b>  {model.description}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/`);
          }}
          className="btn float-end my-2 btn-primary "
          style={{ bottom: 10, right: 10 }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default memo(ProductDescription);
