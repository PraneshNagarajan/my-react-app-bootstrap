import Breadcumb from "../Components/breadcrumb/Breadcrumb";
import Cards from "../Components/cards";
import Navbar from "../Components/navbar/Navbar";
const Courses = (props) => {
    const setPage = (value) => {
        props.page(value)
}
  return (
      <div>
  <Navbar mainpage="course" page={setPage}></Navbar>
  <Breadcumb pageName='Courses'></Breadcumb>
  <Cards/>
      </div>

  );
};
export default Courses;
