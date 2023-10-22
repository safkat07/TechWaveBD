import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();

  const { name, productBrand, _id, ProductType, price, description, rating, photo } =
    updateProduct;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.ProductName.value;
    const ProductType = form.ProductType.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const productBrand = form.productBrand.value;

    const updatedProduct = {
      name,
      productBrand,
      ProductType,
      price,
      description,
      rating,
      photo,
    };

    console.log(updatedProduct);

    // send data to the server
    fetch(` https://brand-shop-server-bd.vercel.app/product/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset()
        })
  };

  return (
    <div className=" p-24">
      <h2 className="text-2xl md:text-5xl text-center my-3 font-bold font-serif">Update {name} Details </h2>
      <h2 className="text-3xl font-extrabold">Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                name="ProductName"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <select
              name="ProductType"
              defaultValue={ProductType}
              className="select select-bordered select-md w-full max-w-xs"
            >
              <option disabled selected>
                Product Type
              </option>
              <option>Phone</option>
              <option>Computer</option>
              <option>Headphone</option>
              <option>Chipset</option>
              <option>Tablet</option>
            </select>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={price}
                name="price"
                placeholder="Product Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Product Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Product description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select
              className="select select-bordered select-md w-full max-w-xs"
              name="productBrand"
              defaultValue={productBrand}
            >
              <option disabled selected>
                Brand Name
              </option>
              <option>Apple</option>
              <option>Sony Xperia</option>
              <option>Samsung</option>
              <option>Google Pixel</option>
              <option>Intel</option>
              <option>Razer</option>
            </select>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Product" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateProduct;
