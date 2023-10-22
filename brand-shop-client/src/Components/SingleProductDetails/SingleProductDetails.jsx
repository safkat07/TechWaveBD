import { Link, useLoaderData, useMatch } from "react-router-dom";
import { BsStarHalf, BsFillCartCheckFill } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SingleProductDetails = () => {
  const {user} = useContext(AuthContext)
  const UserEmail = user.email
  const singleProduct = useLoaderData();
  const { name,  productBrand, ProductType, price, description, rating, photo } =
    singleProduct;

 
 
  const cartProduct = {name, UserEmail, productBrand, ProductType, price, description, rating, photo}

  const handleAddToCart = () => {
  
    console.log(cartProduct);
   
    fetch(
      " https://brand-shop-server-bd.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-7xlmt-5 mx-auto">
      <h2 className=" text-2xl  md:text-5xl text-center mb-10 font-bold ">
        Details of {name}
      </h2>

      <div className="flex gap-10  flex-col justify-center md:flex-row">
        <div className="md:w-1/2 border-r-2 border-orange-300">
          <img className="md:w-[600px] md:h-[500px]" src={photo} alt="" />
        </div>
        <div>
          <h2 className="text-3xl md:text-left text-center font-bold font-mono">
            Product Name: {name}
          </h2>
          <h2 className="text-3xl md:text-left text-center font-bold font-mono">
            Brand Name : {productBrand}
          </h2>
          <h2 className="text-3xl md:text-left text-center  font-bold font-mono">
            Product Type: {ProductType}
          </h2>
          <p className="text-2xl md:text-left text-center font-semibold font-serif">
            Product Details:
          </p>
          <p className="text-xl md:text-left text-center md:w-96 font-light font-serif">
            {description}
          </p>

          <p className=" gap-1  flex md:justify-start justify-center items-center font-bold font-mono">
            {" "}
            <span className="text-2xl ">Rating: {rating}</span>{" "}
            <span className="text-xl  font-bold font-mono">
              {" "}
              <BsStarHalf></BsStarHalf>{" "}
            </span>
          </p>

          <p className="text-2xl md:text-left text-center  font-bold font-mono">
            Price: {price}$
          </p>
          <div className="flex md:justify-start justify-center mt-5  gap-5">
            <Link>
              <button
                onClick={handleAddToCart}
                className="btn btn-warning hover:rounded-full hover:btn-success"
              >
                Add To Cart{" "}
                <BsFillCartCheckFill className="text-xl"></BsFillCartCheckFill>{" "}
              </button>
            </Link>
            <button className="btn btn-warning hover:rounded-full hover:btn-success">
              Purchase{" "}
              <BiSolidPurchaseTag className="text-xl"></BiSolidPurchaseTag>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
