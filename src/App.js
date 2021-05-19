import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isCollapsed, setCollapse] = useState(true);
  const [flag, setFlag] = useState(true);
  const onCollapseHandler = () => {
    setCollapse(!isCollapsed);
    setFlag(!flag);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
        <div className="container">
          <a href="/home" className="navbar-brand ">
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="logo"
              height="30"
              width="30"
              // d- display ;inline-block allows to set heigth and width, but inline take div's width and allow to override
              className="d-inline-block align-bottom me-1"
            ></img>
            Internet World
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle={!isCollapsed ? true : false}
            onClick={onCollapseHandler}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <input type="text" className="form-control mt-2" />
            <button
              className={`${
                flag ? "ms-2" : "mt-2"
              }  btn btn-outline-light btn-sm`}
            >
              Search
            </button>
            {/* if bootstrap4 use ml(margin-left)-auto, ms(start) in bootstrap-5 for right align */}
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item">
                <a href="/home" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="/home" className="nav-link">
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a href="/home" className="nav-link">
                  blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="/home" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*Adding Tables*/}
      <div className="container p-5">
        <div className="table-responsive">
          <table className="table table-bordered  table-striped  text-white text-center table-hover ">
            <caption className="caption-top">Feb-2020</caption>
            <thead className="bg-primary">
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Hours</th>
                <th>Rate</th>
                <th>Address</th>
                <th>mail</th>
                <th>mobile</th>
                <th>payment</th>
              </tr>
            </thead>
            <tbody className="table-light">
              <tr>
                <td>12/02/2020</td>
                <td>Browsing</td>
                <td>2</td>
                <td>40</td>
                <td>SVG</td>
                <td>s@gmail.com</td>
                <td>1234569</td>
                <td>cash</td>
              </tr>
              <tr>
                <td>10/02/2020</td>
                <td>Apply Job</td>
                <td>1</td>
                <td>50</td>
                <td>MDU</td>
                <td>ms@gmail.com</td>
                <td>12784569</td>
                <td>upi</td>
              </tr>
              <tr>
                <td>08/02/2020</td>
                <td>Fax</td>
                <td>0.5</td>
                <td>100</td>
                <td>TPJ</td>
                <td>t@gmail.com</td>
                <td>6784569</td>
                <td>card</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;
