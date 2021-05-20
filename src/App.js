import {useState} from 'react'
import "./App.css";
import Home from './pages/homepage'
import Courses from './pages/coursepage'
function App() {
  const [page, setPage] = useState(<Home page={(e) => onPageHandler(e)}> </Home>)
  const onPageHandler = (value) =>{
    if( value === 'home') {
      setPage(<Home page={(e) => onPageHandler(e)}> </Home>)
    } else {
      setPage(<Courses page={(e) => onPageHandler(e)}> </Courses>)
    }

  }  
  return (
    <div> 
      {page}
    </div>
  );
}
export default App;
