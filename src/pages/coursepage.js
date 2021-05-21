import Breadcumb from "../Components/breadcrumb/BreadCrumb";
import VerticalCards from "../Components/cards/VerticalCards";
import Navbar from "../Components/navbar/Navbar";
const CoursePage = (props) => {
    const setPage = (value) => {
        props.page(value)
}
  return (
      <div>
  <Navbar mainpage="course" page={setPage}></Navbar>
  <Breadcumb pageName='Courses' content="Here it is latest course with affordable price. Limited seats only. Don't delay and Enroll now !!."></Breadcumb>
  <VerticalCards/>
      </div>

  );
};
export default CoursePage;
