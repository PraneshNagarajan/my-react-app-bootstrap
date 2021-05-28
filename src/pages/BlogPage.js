import React, { useState } from 'react'
import Breadcumb from "../Components/breadcrumb/BreadCrumb";
import HorizontalCards from "../Components/cards/HorizontalCards";
import Navbar from "../Components/navbar/Navbar";
import Pagination from '../Components/pagination/Pagination';

const Blog = (props) => {
    const setPage = (value) => {
        props.page(value)
}
const [pagination, setPagination] = useState(1)
const onCurrentPageHandler = (pageNumber) => {
    setPagination(pageNumber)
  }
  return (
      <div>
  <Navbar mainpage="blog" page={setPage}></Navbar>
  <Breadcumb pageName='Blog' content="Never miss any updates from Learn tech...."></Breadcumb>
  <HorizontalCards currentPagination={pagination}/>
  <Pagination getPagination={(e) => onCurrentPageHandler(e)}/>
      </div>

  );
}

export default Blog