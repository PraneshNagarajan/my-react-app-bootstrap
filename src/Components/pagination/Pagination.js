import React, { useState } from 'react'
const Pagination  =(props) => {
    const [pagi, setPagi] = useState(1)

    const assignPagination = (pagi_num) => {
        props.getPagination(pagi_num)
        setPagi(pagi_num)
        console.log(pagi_num)
    }
return(
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className={`page-item ${pagi === 1? 'disabled': ''}`} ><button className='page-link' onClick={() => assignPagination(pagi-1)}>&laquo;</button></li>
    <li className={`page-item ${pagi === 1? 'active': ''}`}><button className="page-link" onClick={() => assignPagination(1)}>1</button></li>
    <li className={`page-item ${pagi === 2? 'active': ''}`}><button className="page-link" onClick={() => assignPagination(2)}>2</button></li>
    <li className={`page-item ${pagi === 3? 'active': ''}`}><button className="page-link"onClick={() => assignPagination(3)}>3</button></li>
    <li className={`page-item ${pagi === 3? 'disabled': ''}`}><button className="page-link" onClick={() => assignPagination(pagi+1)}>&raquo;</button></li>
  </ul>
</nav>
)
}
export default Pagination