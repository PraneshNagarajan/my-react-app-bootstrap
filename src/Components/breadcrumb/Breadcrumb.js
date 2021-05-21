const Breadcrumb = (props) => {
  return (
    <div className="container-fluid p-5 bg-light">
      <nav aria-label="breadcrumb d-inline-block text-center">
        <ol className="breadcrumb px-5">
          <li className="breadcrumb-item">
            <a href="/home">Home</a>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
           {props.pageName}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
