import React, { useState } from "react";
const Navtabs = () => {
  const languages = [
    {
      p_lang: ["Java", "Python", "Ruby", "c++", "Perl"],
      w_lang: ["Javascript", "JQuery", "ReactJS", "VueJS", "Angular"],
      cloud: ["AWS", "MS-Azure", "GCP", "PCF", "FireBase"],
      db: ["Mysql", "Sql", "Big-Query", "Informix", "No-Sql"],
    },
  ];
  const [catagory, setCatagory] = useState(languages[0]['p_lang']);
  const [index, setIndex] = useState(0);
  const onGetCatagory = (event, value, i) => {
    event.preventDefault();
    setCatagory(languages[0][value]);
    setIndex(i);
  };
  const contents = catagory.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  console.log(contents);

  return (
    <div className="p-5">
      <nav
        //   you can use 'nav-tabs' instaed of 'nav-pills'
        className="nav nav-pills justify-content-around"
        style={{ border: `1px solid #D0D0D0` }}
      >
        <li className="nav-items">
          <a
            href=""
            className={`nav-link ${index === 0 ? "active" : ""}`}
            role="button"
            onClick={(e) => onGetCatagory(e, "p_lang", 0)}
          >
            Programming-languages
          </a>
        </li>
        <li className="nav-items active">
          <a
            href=""
            className={`nav-link ${index === 1 ? "active" : ""}`}
            role="button"
            onClick={(e) => onGetCatagory(e, "w_lang", 1)}
          >
            Web-Designings
          </a>
        </li>
        <li className="nav-items">
          <a
            href=""
            className={`nav-link ${index === 2 ? "active" : ""}`}
            role="button"
            onClick={(e) => onGetCatagory(e, "cloud", 2)}
          >
            cloud
          </a>
        </li>
        <li className="nav-items">
          <a
            href=""
            className={`nav-link ${index === 3 ? "active" : ""}`}
            role="button"
            onClick={(e) => onGetCatagory(e, "db", 3)}
          >
            Databases
          </a>
        </li>
      </nav>
      <div className="tab-content">
        <div className={`tab-pane${catagory.length > 0 ? "active show" : ""}`}>
          <ul style={{ border: `1px solid #D0D0D0` }} className="py-3">
            {contents}
          </ul>
        </div>
      </div>
      <hr className="mt-5"></hr>
    </div>
  );
};
export default Navtabs;
