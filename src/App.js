import {useState} from 'react'
import "./App.css";
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
function App() {
  const [page, setPage] = useState(<LoginPage  page={(e) => onPageHandler(e)} ></LoginPage>)
  const onPageHandler = (value) =>{
    if( value === 'home') {
      setPage(<HomePage page={(e) => onPageHandler(e)}> </HomePage>)
    } else if(value === 'course') {
      setPage(<CoursePage page={(e) => onPageHandler(e)}> </CoursePage>)
    } else if (value === 'blog'){
      setPage(<BlogPage page={(e) => onPageHandler(e)}> </BlogPage>)
    } else {
      setPage(<AboutPage page={(e) => onPageHandler(e)}> </AboutPage>)
    }

  }  
  return (
    <div> 
      {page}
    </div>
  );
}
export default App;
