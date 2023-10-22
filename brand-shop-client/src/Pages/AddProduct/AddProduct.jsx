import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.ProductName.value;
    const ProductType = form.ProductType.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const productBrand = form.productBrand.value;

    const newProduct = {
      name,
      productBrand,
      ProductType,
      price,
      description,
      rating,
      photo,
    };

    console.log(newProduct);

    // send data to the server
    fetch(' https://brand-shop-server-bd.vercel.app/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset()
        })

  //   fetch(' https://brand-shop-server-bd.vercel.app/products', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newProduct)
  //   })

  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  };

  return (
    <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Add Product</h2>
      <form onSubmit={handleAddProduct}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ProductName"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2 md:ml-4">
            {/* <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="ProductType" placeholder="Product Type" className="input input-bordered w-full" />
                        </label> */}
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
            <select
            name="ProductType"
            className="select select-bordered select-md w-full max-w-xs">
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
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select className="select select-bordered select-md w-full max-w-xs"
            name="productBrand"
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn btn-block" />
      </form>
    </div>
  );
};


export default AddProduct
