import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faTag, faBook } from "@fortawesome/free-solid-svg-icons";
const HorizontalCards = (props) => {
  const pagination = props.currentPagination;
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group mb-3">
            <li className="list-group-item bg-dark text-white text-center">
              Catagory
            </li>
            <a
              href="/"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              alt="bootstrap"
            >
              {" "}
              Bootstrap
              <span className="badge bg-primary rounded-pill">5</span>
            </a>
            <a
              href="/"
              className="list-group-item list-group-item-action  d-flex justify-content-between align-items-center"
              alt="css"
            >
              {" "}
              Css
              <span className="badge bg-primary rounded-pill">7</span>
            </a>
            <a
              href="/"
              className="list-group-item list-group-item-action active  d-flex justify-content-between align-items-center"
              alt="html"
            >
              {" "}
              html
              <span className="badge bg-primary rounded-pill">2</span>
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="column">
            {pagination=== 1 && (
              <div>
                <div className="card">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="bootstrap 5"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          Bootstrap-5 Course Released!
                          <span className="badge bg-primary  ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-success  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p
                            className="badge rounded-pill ms-1"
                            style={{ background: `#8000ff` }}
                          >
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            Bootstrap
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 3 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn  w-100 text-white"
                          style={{ background: `#8000ff` }}
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-5">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="React JS"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          React-JS Course Released!
                          <span className="badge bg-primary ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-success  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p
                            className="badge rounded-pill ms-1"
                            style={{ background: `#8000ff` }}
                          >
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            React-JS
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 15 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn  w-100 text-white"
                          style={{ background: `#8000ff` }}
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pagination=== 2 && (
              <div>
                <div className="card">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/png;base64,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"
                        alt="AngularJS"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          Angular-JS Course Released!
                          <span className="badge bg-primary ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-success  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p className="badge bg-secondary rounded-pill ms-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            Angular-JS
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 15 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn  btn-secondary w-100 text-white"
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-5">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/png;base64,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"
                        alt="Vue JS"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          Vue-JS Course Released!
                          <span className="badge bg-primary ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-primary  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p className="badge bg-success rounded-pill ms-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            React-JS
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 15 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn btn-success w-100 text-white"
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pagination=== 3 && (
              <div>
                <div className="card">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/png;base64,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"
                        alt="Node JS"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          Node-JS Course Released!
                          <span className="badge bg-primary ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-success  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p className="badge bg-darkrounded-pill ms-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            React-JS
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 15 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn btn-dark w-100 text-white"
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-5">
                  {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="React JS"
                        className="card-img h-100"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
                          React-JS Course Released!
                          <span className="badge bg-primary ms-2">New</span>
                        </h4>
                        <div className=" card-text my-2">
                          <p className="badge rounded-pill bg-success  me-1">
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faDesktop}
                            ></FontAwesomeIcon>
                            Web-development
                          </p>
                          <p
                            className="badge rounded-pill ms-1"
                            style={{ background: `#8000ff` }}
                          >
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faTag}
                            ></FontAwesomeIcon>
                            React-JS
                          </p>
                        </div>
                        <p className="card-text">
                          Learn to build interactive, beautiful and responsive
                          websites using bootstrap css-framework. It will cover
                          sevral topics from scratch. It is for Begineers and
                          Experienced. It will help you create websites within
                          few minutes.
                        </p>
                        {/* use 'text-end' or float-right */}
                        <p className="text-muted text-end">
                          Last updated 15 minutes ago!
                        </p>
                        <button
                          type="button"
                          className="btn  w-100 text-white"
                          style={{ background: `#8000ff` }}
                        >
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faBook}
                          ></FontAwesomeIcon>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HorizontalCards;
