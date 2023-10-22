import Swal from "sweetalert2";

const ShowAddedCart = ({ newCartProduct }) => {
  const {
  
    _id,
    name,
    UserEmail,
    productBrand,
    ProductType,
    price,
    description,
    rating,
    photo,
  } = newCartProduct;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to use this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(` https://brand-shop-server-bd.vercel.app/cart/${_id}`,{
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your Product has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
  
  return (
    <div className="max-w-7xl md:ml-5 mx-auto">

      {/* <div className="card card-side  shadow-xl">
        <figure>
          <img className="w-[400px]"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title">Product Name: {name}</h2>
          <h2 className="card-title">Product Brand: {productBrand}</h2>
          <h2 className="card-title">Product Type: {ProductType}</h2>
          <h2 className="card-title">Product Price: {price}$</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-success hover:btn-neutral">Buy Now</button>
          <button onClick={() => handleDelete(_id)}
          className="btn btn-error hover:btn-secondary">Remove From Cart</button>
          </div>
        </div>
      </div> */}
 <div>

{/* div for product */}
<div>
<div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
          <button className="btn btn-success hover:btn-neutral">Buy Now</button>
          <button onClick={() => handleDelete(_id)}
          className="btn btn-error hover:btn-secondary">Remove From Cart</button>
          </div>
  </div>
</div>
</div>



 </div>
    </div>
  );
};

export default ShowAddedCart;
