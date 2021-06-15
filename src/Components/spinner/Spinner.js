import React from "react";
import './Spinner.css'
const Spinner = () => {
  return (
    <div className="spinner d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;
