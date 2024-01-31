import { useState } from "react";
import Navbar from "./Navbar";

function About() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const description =
    "Natural Bio Products started its activity in 1997 in the city of Tirana. The main objective was the collection & processing of wild Albanian medicinal plants and the production of herbal and essential oils, including culinary spices. Like any difficult beginning, in a period of transition in our country, we produced a reduced number of products in this period. In 2018, we continued to expand the presence of our products in all cities of Albania, and in many cities in Kosovo. We have cooperated with qualified Distributors in plant information who expressed the desire to be part of our big family in maximal service to human health through nature. Now, our products are present in every city of our country, in Kosovo, in Skopje, Macedonia, and in New York, USA. Also, we offer express postal service to any country in the world, directly from our production center!";

  return (
    <div>
      <Navbar />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container bottomContainer">
          <div className="ultimateImg">
            <img
              className="mainImg"
              src="https://www.biocy.com.cy/image/data/1General%20Images/LOGO_2.png"
              alt="Logo"
            />
            <div className="purpleBox">
              <img
                className="stars"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
                alt="Stars"
              />
            </div>
          </div>
          <div className="allText bottomText">
            <p className="text-blk headingText">About Us</p>
            <p className="text-blk subHeadingText">
              Our Mission - Bring the best of medical bio products for your
              skin!
            </p>
            <p className="text-blk description">
              {showFullText ? description : description.slice(0, 100) + "..."}
            </p>
            {description.length > 100 && (
              <button className="explore" onClick={toggleText}>
                {showFullText ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
