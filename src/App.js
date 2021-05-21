import {useState} from 'react'
import "./App.css";
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import BlogPage from './pages/BlogPage'
function App() {
  const [page, setPage] = useState(<HomePage page={(e) => onPageHandler(e)}> </HomePage>)
  const onPageHandler = (value) =>{
    if( value === 'home') {
      setPage(<HomePage page={(e) => onPageHandler(e)}> </HomePage>)
    } else if(value === 'course') {
      setPage(<CoursePage page={(e) => onPageHandler(e)}> </CoursePage>)
    } else {
      setPage(<BlogPage page={(e) => onPageHandler(e)}> </BlogPage>)
    }

  }  
  return (
    <div> 
      {page}
    </div>
  );
}
export default App;
