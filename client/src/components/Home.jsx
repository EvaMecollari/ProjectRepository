import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import foto5 from "../assets/foto1.jpg";
import foto6 from "../assets/Products.jpg";
import foto7 from "../assets/foto2.jpg";
import foto8 from "../assets/foto3.png";
import foto9 from "../assets/foto4.jpg";

function Home() {
  return (
    <div >
      <Navbar />
      <div className="d-flex">
        <div className="flex1  ">
          <img className="width ml-5 centered-image" src={foto6}></img>
        </div>
        <div className="flex2 d-flex align-items-center justify-content-center ">
          <h1 className="mr-auto fontes">
            Welcome to our Natural Bio Products
          </h1>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center bg-secondary mt-4">
        <div id="carouselExample" className="carousel slide content">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={foto5} className="d-block image" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={foto7} className="d-block image" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={foto8} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={foto9} className="d-block w-100" alt="Fourth slide" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
