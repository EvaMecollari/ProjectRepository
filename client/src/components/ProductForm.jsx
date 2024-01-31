import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import foto10 from "C:/Users/User/Desktop/Notes/client/src/assets/foto10.png";

const ProductForm = (props) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();

  const { socket } = props;

  const CreateProduct = (e) => {
    e.preventDefault();

    // Validation checks
    if (description.length > 80) {
      setValidation({
        ...validation,
        description: {
          message: "Description should be a maximum of 30 characters.",
        },
      });
      return;
    }

    if (parseFloat(price) <= 0 || isNaN(parseFloat(price))) {
      setValidation({
        ...validation,
        price: {
          message: "Price should be a number higher than 0.",
        },
      });
      return;
    }

    // Form submission
    axios
      .post("http://localhost:8000/api/display/", {
        name,
        price,
        description,
        img,
      })
      .then((res) => {
        socket.emit("toServer", res.data);
        navigate("/display");
      })
      .catch((err) => {
        console.log(err);
        setValidation(err.response.data.errors);
      });
  };

  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 80) {
      setDescription(inputValue);
    }
  };

  const handlePriceChange = (e) => {
    const inputValue = e.target.value;

    if (parseFloat(inputValue) > 0 || inputValue === "") {
      setPrice(inputValue);
    }
  };

  return (
    <div className="">
      <div className="fullscreen-container">
        <img src={foto10} alt="Background" className="fullscreen-video" />

        <Navbar />
        <div className="d-flex align-items-center justify-content-center ">
          <div className="bg-light borderrs mt-2 ">
            <form
              className=" d-flex justify-content-between  w-90 padiing shadow-none p-3 mb-10 text-dark bg-light  text-light rounded"
              onSubmit={CreateProduct}
            >
              <div>
                <h1>Add New Product </h1>
                <div className="form-group">
                  <label>Product Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {validation.name ? (
                    <p className="redVal">{validation.name.message}</p>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  {validation.description ? (
                    <p className="redVal">{validation.description.message}</p>
                  ) : (
                    ""
                  )}
                </div>

                <br />
                <div className="form-group">
                  <label>Price : </label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  {validation.price ? (
                    <p className="redVal">{validation.price.message}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <label>Image Url:</label>
                  <input
                    type="url"
                    className="form-control"
                    onChange={(e) => setImg(e.target.value)}
                  />
                  {validation.img ? (
                    <p className="redVal">{validation.img.message}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="btn bg-info">
                    Post this new product !
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
