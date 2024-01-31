import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
const EditOne = () => {
  const [editedProduct, setEditedProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((response) => {
        setEditedProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSave = () => {
    axios
      .patch(`http://localhost:8000/api/display/${id}`, editedProduct)
      .then((response) => {
        console.log("Product updated:", response.data);
        navigate(`/product/${id}`);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="edit-main padding d-flex align-items-center justify-content-center">
        <div>
          <div>
            <h2>Edit Product Details</h2>
            <label className="form-group" htmlFor="NoteTitle">
              Product Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="NoteTitle"
              name="name"
              placeholder="Note Title"
              value={editedProduct.name || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Product Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              value={editedProduct.price || 0}
              onChange={handleInputChange}
              placeholder="This is a note"
            />
          </div>

          <div className="form-group">
            <label htmlFor="NoteBody">Description: </label>
            <input
              className="form-contrl"
              type="text"
              id="NoteBody"
              name="description"
              placeholder="Note Body"
              value={editedProduct.description || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="btn-div d-flex justify-content-between">
            <Link to="/display" className="btn bg-light">
              Cancel
            </Link>
            <button className="btn bg-light" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditOne;
