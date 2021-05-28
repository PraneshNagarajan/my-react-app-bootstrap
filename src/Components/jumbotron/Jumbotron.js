import React from 'react'
import DropBox from "../dropbox/DropBox";

const Jumbotron = () => {
  return (
    /* Adding Jumbotron :
      ---------------------
      In bootstrap 5. removed the jumbostron.
      In $, class="jumbotron"
        */
    <div className="container-fluid p-5 bg-light">
      <h4 className="display-4"> Learning Technology PVT ..</h4>
      <h5 className="lead p-2"> Welcome All,</h5>
      <p className="lead text-wrap mx-5">
        If you want to build the beautiful and attrative web page. It is the
        good platform to start. We are trained more tha 2,50,000+ students and
        professonals last 15 years. Happy Learning.
      </p>
      <DropBox/>
      <hr className="mt-5" />
    </div>
  );
};

export default Jumbotron;
