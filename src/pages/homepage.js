import Navbar from "../Components/navbar/Navbar";
import Jumbotron from "../Components/jumbotron/Jumbotron";
import Table from "../Components/table/Table"
const Home = (props) => {
    const setPage = (value) => {
            props.page(value)
    }
  return (
    <div>
      <Navbar mainpage="home"  page={setPage}></Navbar>
      <Jumbotron></Jumbotron>
      <Table/>
    </div>
  );
};

export default Home