import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import EditOne from "./EditOne";
import Navbar from "./Navbar";
const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const { update, setUpdate } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const ProductBio = () => {
    navigate("/products");
  };
   const Page= () => {
    navigate(-1)
   }

  return (
    <div className="bg-light">
    <Navbar/>
    
    <div className="bg-light d-flex align-items-center justify-content-center element-selector ">
      
     <div >
      <div className="widthh border p-3"> <h4 className="productNav ">Product Name:{product.name}</h4>
      <img src={product.img} className="widthhh w-50" alt="" />
      <br />
      <br />
      <h6> Description: {product.description}</h6>
     <h6> Price:{product.price}</h6>
      <div className="orangebck">
       
        <Link to={`/product/${id}/edit`}>
          <button className="btn-dark active font-weight-bold">Edit Product</button>
        </Link></div>
    
      </div>
     </div>
    </div>
    </div>
  );
};

export default ProductDetails;
