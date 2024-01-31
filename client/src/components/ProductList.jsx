import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProductList = (props) => {
  const { socket, update, setUpdate } = props;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/display/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));

    // Include setUpdate and socket in the dependency array
    socket.on("toClient", (product) => {
      setUpdate(!update);
    });

    // Include socket in the dependency array
    return () => socket.removeAllListeners();
  }, [update, setUpdate, socket]);

  const ViewProfile = (productId) => {
    navigate("/product/" + productId);
  };

  const DeleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        // Include socket in the dependency array
        socket.emit("toServer", res.data);
      })
      .catch((err) => console.log(err));
  };

  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <div className="bg-light">
      <Navbar />
      <div className="bg-light ">
        <div>
          <div className="bg-light d-flex flex-column align-items-center ">
            {sortedProducts.map((product, index) => (
              <div
                key={index}
                className="element-selector w-50 p-3 mb-5 bg-light rounded p-3 mt-3 ml-3"
              >
                <div className="productCard d-flex justify-content-around">
                  <div>
                    <div className="d-flex justify-content-between ">
                      <h4 className="font-weight-bold bg-light text-dark "> Product Name: {product.name}</h4>
                    </div>
                    <img className="widthhh w-50" src={product.img} alt="" />
                    <h5 className="font-family: Arial, Helvetica, sans-serif ">
                      Description: {product.description}
                    </h5>
                    <h5 className="font-family: Arial, Helvetica, sans-serif  ">
                      Product Price: {product.price}$
                    </h5>
                    <br />
                    <button
                      className="btn btn-success font-weight-bold font-family: Arial, Helvetica, sans-serif"
                      onClick={() => ViewProfile(product._id)}
                    >
                      Edit Product Details
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn bg-light font-weight-bold"
                      onClick={() => DeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the component props
ProductList.propTypes = {
  socket: PropTypes.object.isRequired,
  update: PropTypes.bool.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default ProductList;
