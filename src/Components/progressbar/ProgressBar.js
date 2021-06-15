import React, { useEffect, useState } from "react";
const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        const newValue = prev + 10;
        if (prev === 90) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 2000);
  }, []);

  return (
    <div className="p-5">
      <div className="card card-body">
        <div className="card-text">Dowloading datas from server</div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: String(percentage + `%`) }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            min="0"
            max="100"
          >
            <span className="card-text text-center">
              {" "}
              Downloading({percentage}%)....
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
