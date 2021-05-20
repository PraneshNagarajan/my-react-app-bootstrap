import Cards from "../Components/cards";
import Navbar from "../Components/navbar/Navbar";
const Courses = (props) => {
    const setPage = (value) => {
        props.page(value)
}
  return (
      <div>
  <Navbar mainpage="course" page={setPage}></Navbar>
  <Cards/>
      </div>

  );
};
export default Courses;
