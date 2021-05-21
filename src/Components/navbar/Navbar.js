import { useState } from "react";
const Navbar = (props) => {
  const [isCollapsed, setCollapse] = useState(true);
  const [isDropDowned, setDropDowned] = useState(true);
  const [isActive, setActive] = useState({
    home: props.mainpage === 'home'? true: false,
    courses: props.mainpage === 'course'? true: false,
    blog: props.mainpage === 'blog'? true: false,
    contact: props.mainpage === 'contact'? true: false,
  });
  const onCollapseHandler = () => {
    setCollapse(!isCollapsed);
  };
  const onDropDownCollapsedHandler = (e) => {
    e.preventDefault();
    setDropDowned(!isDropDowned);
  };

  const onSetPage = (event,value) => {
      event.preventDefault()
      props.page(value)
  }
  const onActiveHandler = (event, fi, se, th, ft) => {
    setActive({
      home: fi ? true : false,
      courses: se ? true : false,
      blog: th ? true : false,
      contact: ft ? true : false,
    });

    /* 
    ___________________________________________________________________________________________________________________________
    Notes:
    -------

    The problem can be found in your onClick prop:
    <button className="previous-round" onClick={setOrderData_(previous(orderData_))}>&#8249;</button>                                          ^
    Everything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
    By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button.
    <button className="previous-round" onClick={() => setOrderData_(previous(orderData_))}
    >&#8249;</button> 
    --------------------------------------------------------------------------------------------------------------------------
    2)whenever use a -tag browser move to that url which mention and reload to aviod or cancel event use preventhandler
    ____________________________________________________________________________________________________________________________
    */
  }

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="logo"
            height="30"
            width="30"
            // d- display ;inline-block allows to set heigth and width, but inline take div's width and allow to override
            className="d-inline-block align-bottom me-1"
          ></img>
          Learn Tech
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
          <input
            type="text"
            className={`form-control ${isCollapsed ? "me-2" : "mt-2"}`}
          />
          <button
            className={`${
              isCollapsed ? "" : "mt-2"
            }  btn btn-outline-light btn-sm`}
          >
            Search
          </button>
          {/*
            Notes:
            ------- 
            if bootstrap4 use ml(margin-left)-auto, ms(start) in bootstrap-5 for right align
             */}
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <a
                href="/home"
                className={`nav-link ${isActive.home ? "active" : ""}`}
                onClick={(e) => onSetPage(e,'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Courses"
                className={`nav-link ${isActive.courses ? "active" : ""}`}
                onClick={(e) => onSetPage(e,'course')}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/blog"
                className={`nav-link ${isActive.blog ? "active" : ""}`}
                onClick={(e) => onSetPage(e,'blog')}
              > 
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                className={`nav-link ${isActive.contact ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                onClick={onDropDownCollapsedHandler}
                href="/channel"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={!isDropDowned ? true : false}
              >
                Channels
              </a>

              {/* 
                
                Notes:
                -----
                _________________________________________________________________________________________
                if use <a> for dropdown it moves url so browser reload so 'drop-items' does hide or show.
                so add 'preventdefault() in function to stop event
                                       (or)
                                       
                use 'button' instead of <a> <button className="btn btn-primary-link"> 
                -----------------------------------------------------------------------------------------
                add 'show' so that able to view dropdown list in react-js
                __________________________________________________________________________________________
                */}

              <ul
                className={`dropdown-menu ${
                  isDropDowned ? "" : "show"
                } bg-light`}
                aria-labelledby="navbarDropdown"
              >
                <li className="dropdown-item ">
                  <a href="/github" className="text-decoration-none">
                    GitHub
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item ">
                  <a href="/facebook" className="text-decoration-none">
                    Facebook
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item">
                  <a href="/slack" className="text-decoration-none">
                    Slack
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
