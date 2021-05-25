import { useState } from "react";

const Carousel = () => {
  const [isActiveImage, setActiveImage] = useState({
    img_1: true,
    img_2: false,
    img_3: false,
  });
  const [pos, setPosition] = useState(1);

  const setPrevImage = (index) => {
    setActiveImage({
      img_1: index === 1 ? true : false,
      img_2: index === 2 ? true : false,
      img_3: index === 3 ? true : false,
    });
    setPosition(index);
  };

  const setNextImage = (index) => {
    setActiveImage({
      img_1: index === 1 ? true : false,
      img_2: index === 2 ? true : false,
      img_3: index === 3 ? true : false,
    });
    setPosition(index);
  };

  const onIndicatorHandler = (index) => {
    setActiveImage({
      img_1: index === 1 ? true : false,
      img_2: index === 2 ? true : false,
      img_3: index === 3 ? true : false,
    });
    setPosition(index);
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide my-5 mx-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={isActiveImage.img_1 ? "active" : ""}
          onClick={() => onIndicatorHandler(1)}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={isActiveImage.img_2 ? "active" : ""}
          onClick={() => onIndicatorHandler(2)}
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={isActiveImage.img_3 ? "active" : ""}
          onClick={() => onIndicatorHandler(3)}
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${isActiveImage.img_1 ? "active" : ""}`}>
          <img
            src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="first image"
            className=" d-block w-100 h-100"
          />
        </div>
        <div className={`carousel-item ${isActiveImage.img_2 ? "active" : ""}`}>
          <img
            src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="second image"
            className=" d-block w-100"
          />
        </div>
        <div className={`carousel-item ${isActiveImage.img_3 ? "active" : ""}`}>
          <img
            src="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="third image"
            className="w-100"
            style={{ backgroundSize: `cover` }}
          />
        </div>
      </div>

      <button
        className={`carousel-control-prev ${pos === 1 ? "d-none" : ""}`}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        onClick={() => setPrevImage(pos - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${
          Object.keys(isActiveImage).length === pos ? "d-none" : ""
        }`}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        onClick={() => setNextImage(pos + 1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
