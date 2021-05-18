import "./App.css";
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isCollapsed, setCollapse] = useState(true)
  const [flag, setFlag] = useState(true)
  const onCollapseHandler = () =>{
    setCollapse(!isCollapsed)
    setFlag(!flag)
  } 
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <div className="container">
        <a href="/home" className="navbar-brand ">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="logo"
            height="30"
            width="30"
            className="d-inline-block align-bottom me-1"
          ></img>
          Internet World
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle={!isCollapsed? true: false} onClick={onCollapseHandler} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <input type="text" className="form-control mt-2" />
          <button className={`${flag ? 'ms-2':'mt-2' }  btn btn-outline-light btn-sm`}>Search</button>
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
  );
}
export default App;
