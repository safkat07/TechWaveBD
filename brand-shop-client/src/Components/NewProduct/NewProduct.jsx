import { Link } from "react-router-dom";

import { LuSettings2 } from 'react-icons/lu';
import { TbListDetails } from 'react-icons/tb';
import { BsStarHalf, } from "react-icons/bs";

const NewProduct = ({ product }) => {
  const { name, productBrand, _id, ProductType, price, description, rating, photo } =
    product;
  return (
    <div className="max-w-7xl  mx-auto">
  
     
      <div>
      <div className="card my-10  card-compact md:w-[500px]  shadow-xl">
  <figure><img className="w-96  h-80" src={photo} alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="md:card-title md:text-left text-center">{name}</h2>
    <h2 className="md:card-title md:text-left text-center">Brand: {productBrand}</h2>
    <p  className="md:card-title md:w-full  md:text-left text-center">Product Type: {ProductType}</p>
    <p className="md:card-title md:w-full  md:text-left text-center">{description}</p>
    <span className=""><BsStarHalf></BsStarHalf></span>
    <p className="md:card-title text-2xl font-semibold md:text-left text-center">Rating: {rating}  <span className="md:block hidden"><BsStarHalf></BsStarHalf></span></p> 
    
    
    <p className="md:card-title text-2xl font-semibold md:text-left text-center">Price: {price}$</p>
    

    <div className="flex flex-row justify-center gap-5">
      <Link to={`/update/${_id}`}  >
      <button className="btn btn-warning hover:btn-success">Update Product <span className="text-xl"><LuSettings2></LuSettings2></span> </button>
      </Link>
      <Link to={`/singleProductDetails/${_id}`} >
      <button className="btn btn-warning hover:btn-success">View Product <span className="text-xl"><TbListDetails></TbListDetails></span></button>
      </Link>

    </div>
  </div>
</div>
    </div>
      </div>
 
  );
};

export default NewProduct;
