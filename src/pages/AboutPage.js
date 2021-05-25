import Navbar from "../Components/navbar/Navbar";
import Carousel from '../Components/carousel/Carousel'
const AboutPage = (props) => {
    const setPage = (value) => {
        props.page(value)
}
  return (
      <div>
            <Navbar mainpage="about" page={setPage}></Navbar>
            <Carousel/>
      </div>

  );
}
export default AboutPage