import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faSkype,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react"; 
import './DropBox.css'

const DropBox = () => {
  const list = [
    {
      icon: faFacebook,
      name: "Facebook",
      color: "text-primary",
    },
    {
      icon: faSkype,
      name: "Skype",
      color: "text-info",
    },
    {
      icon: faYoutube,
      name: "Youtube",
      color: "text-danger",
    },
    {
      icon: faInstagram,
      name: "Instagram",
      color: "text-danger",
    },
    {
      icon: faTwitter,
      name: "Twitter",
      color: "text-info",
    },
  ];

  const [dropbox, setDropbox] = useState([
    { id: 0,
      split: false,
      style: "dropdown",
      btn: "primary",
      display: "",
      expand: false,
    },
    {
        id: 1,
        split: false,
        style: "dropup",
        btn: "success",
        display: "",
        expand: false,
      },
      { id: 2,
          split: false,
        style: "dropstart",
        btn: "warning",
        display: "",
        expand: false,
      },
      {   id:3,
          split: false,
          style: "dropend",
          btn: "danger",
          display: "",
          expand: false,
        },
        { id:4,
          split: true,
          style: "dropend",
          btn: "danger",
          display: "",
          expand: false,
        }
    
  ]);

  const onEnableDropBox = (index) =>{
    const newData = dropbox.map(item => item.id === index? 
        {
            id: item.id,
            split: item.split,
            style: item.style,
            btn: item.btn,
            display: 'show',
            expand: true
        }:
        {
            id: item.id,
            split: item.split,
            style: item.style,
            btn: item.btn,
            display: '',
            expand: false
        }
        )
        setDropbox(newData)
  }

  return (
    //   drop-up, drop-end drop-start doesn't work
    <div className="d-flex justify-content-around flex-wrap">
      {dropbox.map((drop, index) => {
        return (
          <div key={index} className={`btn-group ${drop.style} my-2`}>
              {drop.split && <button className={`btn btn-${drop.btn}`} type="button"> conant Us </button>}
            <button
              className={`btn btn-${drop.btn} dropdown-toggle ${drop.split? 'dropdown-toggle-split':''}`}
              type="button"
              data-bs-toggle='dropdown'
              aria-haspopup="true"
              aria-expanded={drop.expand}
              onClick={() => onEnableDropBox(index)}
            >
                {/* sr- Screen Reader it is visible in screen. sr - tool used to blind people. it indicate it was button, dropdown etc via audio */}
            <span className="sr-only"> toggle ${drop.style}</span>
            {!drop.split && `Contact Us`}
            </button>
            <div></div>
            <div className={`dropdown-menu ${drop.display} ${drop.style}`}>
              {list.map((item, index) => {
                return (
                  <a
                    href="#"
                    className="dropdown-item"
                    key={index}
                    role="button"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`me-2 ${item.color}`}
                    ></FontAwesomeIcon>
                    {item.name}
                    {list.length - 1 > index && (
                      <div className="dropdown-divider"></div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropBox;
