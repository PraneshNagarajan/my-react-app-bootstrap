const Table = () => {
  return (
    <div className="container-fluid p-5">
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover text-center">
          <caption className="caption-top">
            Students Placed Datas 2017 - 2020
          </caption>
          <thead className="bg-primary">
            <tr>
              <th>Course</th>
              <th>Company</th>
              <th>Role</th>
              <th>Year</th>
              <th>package</th>
              <th>Studends Studied</th>
              <th>Students Placed</th>
              <th>Placing %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML, Css, Bootstrap</td>
              <td>TCS, Wipro</td>
              <td>Developer</td>
              <td>2018-2020</td>
              <td>3-5 lpa</td>
              <td>20000</td>
              <td>18000</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>Infosys, ZOHO</td>
              <td>Developer</td>
              <td>2017-2020</td>
              <td>5-7 lpa</td>
              <td>30000</td>
              <td>28000</td>
              <td>93.3</td>
            </tr>
            <tr>
              <td>Tcs, Accenture, Cts</td>
              <td>React-jS</td>
              <td>Developer</td>
              <td>2016-2020</td>
              <td>8-12 lpa</td>
              <td>18000</td>
              <td>17000</td>
              <td>95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
