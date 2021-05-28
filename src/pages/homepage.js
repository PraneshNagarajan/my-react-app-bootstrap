import React from 'react'
import Navbar from "../Components/navbar/Navbar";
import Jumbotron from "../Components/jumbotron/Jumbotron";
import Table from "../Components/table/Table"
import Accordion from '../Components/accordion/Accordion'
import Navtabs from '../Components/navtabs/NavTabs'
const Home = (props) => {
    const setPage = (value) => {
            props.page(value)
    }
  return (
    <div>
      <Navbar mainpage="home"  page={setPage}></Navbar>
      <Jumbotron></Jumbotron>
      <Navtabs/>
      <Table/>
      <Accordion/>
    </div>
  );
};

export default Home