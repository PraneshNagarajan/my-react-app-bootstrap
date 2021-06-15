import React, { useState } from "react";
import "./RegisterPage.css";
const RegistrationPage = (props) => {
  const [flag, setFlag] = useState(false);
  const onRegister = () => {
    props.page('home')
  };
  const isOpened = (value) => {
    setFlag(value ? true : false);
  };
  return (
    <form onSubmit={onRegister} className="bg-hero1">
      <div className="container ">
        <div className="card">
          <div className="card-header bg-secondary">
            <h4 className="card-text text-center text-white">
              Register / SignUp
            </h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="form-group col-md-6 my-3">
                <label htmlFor="FirstName">FirstName</label>
                <input type="text" className="form-control" id="FirstName" />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="SecondName">SecondName</label>
                <input type="text" className="form-control" id="SecondName" />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="Phone">Phone</label>
                <input type="number" className="form-control" id="Phone" />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  min="1950-01-01"
                  max="2021-12-31"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  min="5"
                  max="100"
                  step="1"
                  id="age"
                />
              </div>
              <div className="form-group col-md-6 p-3">
                {/* note:
                  -------------
                  name attribute must be same
                  
                  */}
                <label htmlFor="gender" className="me-3 h5">
                  {" "}
                  Gender
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="others"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="others">
                    Others{" "}
                  </label>
                </div>
              </div>
              <div className=" col-md-6 p-3">
                <label htmlFor="nationality" className="me-3 h5">
                  Nationality
                </label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="nationality"
                    id="indian"
                    value="indian"
                    className="form-check-input"
                  />
                  <label htmlFor="indian" className="form-check-label">
                    Indian
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="nationality"
                    id="n-others"
                    value="others"
                    className="form-check-input"
                  />
                  <label htmlFor="others" className="form-check-label">
                    others
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 my-3">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm password"
                  id="c-password"
                  className="form-control"
                />
              </div>
              <div className="form-check form-check-inline d-flex justify-content-center">
                <input
                  type="checkbox"
                  name="terms and condition"
                  id="tc"
                  className="form-check-input me-2"
                />
                <p>
                  I accept all the{" "}
                  <a
                    href="#"
                    type="button"
                    onClick={() => isOpened(true)}
                    data-bs-toggle="modal"
                    data-bs-target="#showterms"
                  >
                    terms&condition
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
             <div className="col-md-4">
             <button className="btn btn-secondary w-100" onClick={onRegister}>
                Register
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal   ${flag ? "d-block" : ""} `}
        style={{ background: flag ? `rgba(0,0,0,0.5)` : `` }}
        tabIndex="-1"
        id="showterms"
        // prevent close model outside click
        data-bs-backdrop="static" 
        // prevent close model pressing 'esc' key
        data-bs-keyboard="false"
      >
        {/* use modal-dialog-centered to diaply center instead of top */}
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => isOpened(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. This is some
                placeholder content to show the scrolling behavior for modals.
                t commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => isOpened(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => isOpened(false)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
