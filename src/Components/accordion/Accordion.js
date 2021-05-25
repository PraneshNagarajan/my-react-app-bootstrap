import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
const Accordion = () => {
  const [datas, setDatas] = useState([
    {
      index: 0,
      flag: false,
      state: "collapse",
      question: "Refund Policy",
      answer:
        "you can refund your amount. if you don't like the course after one week from the date when the class start. After you can't get refund amount. However we can't refund the registration fee.",
    },
    {
      index: 1,
      flag: false,
      state: "collapse",
      question: "Registering Course",
      answer:
        "You can register for the course with the amount of 10% percent of the course fee for confirming the slot. After that, you can pay the remaining amount on that course starting date..",
    },
  ]);
  const onCollapseHandler = (id) => {
    // const newData = datas.filter((item) => item.index === id ).map(item => ({
    //     index: id,
    //     flag: !item.flag,
    //     state: item.state.length === 0 ? "collapse" : "",
    //     question: item.question,
    //     answer: item.answer,
    //   }))   
    const newData = datas.map(item => item.index === id ?{
        index: item.index,
        flag: !item.flag,
        state: item.state.length === 0 ? "collapse" : "",
        question: item.question,
        answer: item.answer,
      }: {
        index: item.index,
        flag: false,
        state: "collapse",
        question: item.question,
        answer: item.answer
      } )
    setDatas(newData);
  };
  return (
    <div className="container-fluid accordion px-5">
      <hr className="my-5"></hr>
      <h4 className="my-3">Frequently Asked Questions:</h4>
      {datas.map((data, index) => {
        return (
          <div key={index} className="accordion-item">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <a
                  href={`#${index}`}
                  className="card-link btn btn-outline-primary"
                  aria-label="question1"
                  data-bs-toggle="collapse"
                  aria-expanded={
                    data.flag && data.index === index ? false : true
                  }
                  onClick={() => onCollapseHandler(index)}
                  role="button"
                >
                  {data.question}
                </a>
                <FontAwesomeIcon icon={data.flag? faAngleUp: faAngleDown}></FontAwesomeIcon>
              </div>
              <div className={data.state} id={index} >
              <div  className={`card-body`}>
                <p className="card-text">{data.answer}</p>
              </div>
              </div>
            </div>
          </div>
        );
      })}

      <hr className="my-5"></hr>
    </div>
  );
};
export default Accordion;
