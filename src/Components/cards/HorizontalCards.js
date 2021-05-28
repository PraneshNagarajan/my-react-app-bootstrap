import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faTag, faBook } from "@fortawesome/free-solid-svg-icons";
const HorizontalCards = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-3">
            <div className="list-group mb-3">
                <li className="list-group-item bg-dark text-white text-center">Catagory</li>
                <a href="/" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" alt="bootstrap"> Bootstrap
                <span className="badge bg-primary rounded-pill">5</span>
                </a>
                <a href="/" className="list-group-item list-group-item-action  d-flex justify-content-between align-items-center" alt="css"> Css
                <span className="badge bg-primary rounded-pill">7</span></a>
                <a href="/" className="list-group-item list-group-item-action active  d-flex justify-content-between align-items-center" alt="html"> html
                <span className="badge bg-primary rounded-pill">2</span></a>
            </div>
        </div>
        <div className="col-md-9">
          <div className="column">
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
                      Experienced. It will help you create websites within few
                      minutes.
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
                      Experienced. It will help you create websites within few
                      minutes.
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
        </div>
      </div>
    </div>
  );
};
export default HorizontalCards;
