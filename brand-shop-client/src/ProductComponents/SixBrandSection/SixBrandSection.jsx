import { Link } from "react-router-dom";

const SixBrandSection = ({ brand }) => {
  const { brandName, _id, photo, brandDetails } = brand;
  return (
    <div className="max-w-7xl  mx-auto">
      <div >





      <Link to={`/brandDetails/${_id}`}>
          <button className="group relative">
            <div className="group-hover:bg-opacity-80 transition-opacity duration-700">
              <div className="card w-96 hover:opacity-50   image-full relative">
                <figure>
                  <img
                    src={photo}
                    alt={brandName}
                    className="transition-transform transform hover:scale-105"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-center font-mono font-bold text-2xl">
                    {brandName}
                  </h2>
                </div>
                <div className="card-body absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <h2 className="card-title text-2xl font-mono">
                    {brandDetails}
                  </h2>
                </div>
              </div>
            </div>
          </button>
        </Link>





      </div>
    </div>
  );
};

export default SixBrandSection;
