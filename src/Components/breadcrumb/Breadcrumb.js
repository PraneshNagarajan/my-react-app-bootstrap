import React from 'react'
const Breadcrumb = (props) => {
  return (
    <div className="container-fluid p-5 bg-light">
      <div className="px-5">
      <h4>Learn Tech {props.pageName}</h4>
      <p className="text-muted"> {props.content}</p>
      </div>
      <nav aria-label="breadcrumb">
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
