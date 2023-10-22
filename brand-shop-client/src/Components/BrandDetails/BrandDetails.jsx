import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import NewProduct from "../NewProduct/NewProduct";

import Slider from "../Slider/Slider";

const BrandDetails = () => {
  const [newProduts, setNewProdutcs] = useState([]);
  const brand = useLoaderData();

  const { brandName, photo, brandDetails } = brand;

  fetch(" https://brand-shop-server-bd.vercel.app/product")
    .then((res) => res.json())
    .then((data) => {
      const filteredProducts = data.filter(
        (product) => product.productBrand === brandName
      );
      setNewProdutcs(filteredProducts);
    });

  return (
    <div>
      <h2 className="text-2xl md:text-5xl text-center my-3 font-bold font-serif">
        Welcome to{" "}
        <span className="font-mono text-3xl md:text-6xl">{brandName}</span>{" "}
        House
      </h2>

      {/* <div>
           {
            newProduts?.map(product => <NewProduct product={product} key={product._id}></NewProduct>)
           }
         </div> */}

      {newProduts.length === 0 ? (
        <div>
          <p className="text-5xl font-bold mt-36 font-sans text-center ">
            SORRY!!
          </p>
          <p className="text-5xl font-bold  font-sans text-center ">
            No Product Found!!
          </p>
          <div className="flex mt-10 justify-center">
            <Link to="/addproduct">
              <button className="btn btn-warning hover:rounded-full hover:btn-success">
                Add Some Products In This Brand
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // newProduts?.map((product) => (
        //   <NewProduct product={product} key={product._id}></NewProduct>
        // ))
        <div>
          <div>
            <Slider></Slider>
          </div>
          <div className="grid md:gap-5 grid-cols-1 md:grid-cols-2">
            { newProduts?.map((product) => (
              <NewProduct product={product} key={product._id}></NewProduct>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
