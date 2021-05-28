import React from 'react'
import Breadcumb from "../Components/breadcrumb/BreadCrumb";
import HorizontalCards from "../Components/cards/HorizontalCards";
import Navbar from "../Components/navbar/Navbar";
const Blog = (props) => {
    const setPage = (value) => {
        props.page(value)
}
  return (
      <div>
  <Navbar mainpage="blog" page={setPage}></Navbar>
  <Breadcumb pageName='Blog' content="Never miss any updates from Learn tech...."></Breadcumb>
  <HorizontalCards/>
      </div>

  );
}

export default Blog