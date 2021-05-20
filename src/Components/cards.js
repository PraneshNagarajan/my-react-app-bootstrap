const Cards = () => {
  return (
    <div className="container my-5">
        <h4>Courses</h4>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card my-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUyEnf963_bweH2LtW65im7IPhpzrMZTOsg&usqp=CAU"
              alt="css"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">HTML-5</h4>
              <p className="card-text badge bg-primary my-2"> Development</p>
              <p className="card-text badge m-2" style={{ background: `#ff3300` }}> HTML</p>
              <p className="card-text">
                Learn HTML and build powerful interactive websites in minutes.
                Enroll this course to learn everything from scartch
              </p>
              {/* btn-block used full width, In bootstrap-5 it has been depricated so use w-100  */}
              <a
                href="/"
                className="btn w-100 text-white"
                style={{ background: `#ff3300` }}
              >
                Enroll Now
              </a>
            </div>
            <small className="text-muted card-footer">
              New batch starts from June, 2021.
            </small>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card my-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGShGj_BslfEq-NLIfiFjsJMEG7CfsXlH9A&usqp=CAU"
              alt="css"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">Java Script</h4>
              <p className="card-text badge bg-primary my-2"> Development</p>
              <p className="card-text badge bg-warning m-2"> JavaScript</p>
              <p className="card-text">
                Learn HTML and build powerful interactive websites in minutes.
                Enroll this course to learn everything from scartch
              </p>
              {/* btn-block used full width, In bootstrap-5 it has been depricated so use w-100  */}
              <a href="/" className="btn btn-warning text-white w-100">
                Enroll Now
              </a>
            </div>
            <small className="text-muted card-footer">
              New batch starts from June, 2021.
            </small>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card my-3">
            <img
              src="data:image/jpeg;base64,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"
              alt="css"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">CSS-3</h4>
              <p className="card-text badge bg-primary my-2"> Development</p>
              <p className="card-text badge bg-info m-2"> CSS</p>
              <p className="card-text">
                Learn CSS and build powerful interactive websites in minutes.
                Enroll this course to learn everything from scartch
              </p>
              {/* btn-block used full width, In bootstrap-5 it has been depricated so use w-100  */}
              <a
                href="/"
                className="btn btn-primary w-100"
              >
                Enroll Now
              </a>
            </div>
            <small className="text-muted card-footer">
              New batch starts from June, 2021.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
