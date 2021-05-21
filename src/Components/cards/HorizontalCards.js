import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDesktop, faTag} from '@fortawesome/free-solid-svg-icons'
const HorizontalCards = () => {
  return (
    <div className="container p-5">
      {/* g- Gutter width is just a fancy term for the margin between columns within a row. g = margin-left =0 and margin-right =0 */}
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="bootstrap 5"
              className="card-img h-100"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="card-title">
                Bootstrap-5 Course Released!
                <span className="badge bg-primary">New</span>
              </h4>
              <div className=" card-text my-2">
                <p className="badge rounded-pill bg-success  me-1">
                  <FontAwesomeIcon className="me-1" icon={faDesktop}></FontAwesomeIcon>
                  Web-development
                </p>
                <p
                  className="badge rounded-pill ms-1"
                  style={{ background: `#8000ff` }}
                >
                  <FontAwesomeIcon className="me-1" icon={faTag}></FontAwesomeIcon>
                   Bootstrap
                </p>
              </div>
              <p className="card-text">
                Learn to build interactive, beautiful and responsive websites
                using bootstrap css-framework. It will cover sevral topics from
                scratch. It is for Begineers and Experienced. It will help you
                create websites within few minutes.
              </p>
              {/* use 'text-end' or float-right */}
              <p className="text-muted text-end">
                
                Last updated 3 minutes ago!
              </p>
              <button type="button" className="btn  w-100 text-white" style={{ background: `#8000ff` }}>
                
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HorizontalCards;
