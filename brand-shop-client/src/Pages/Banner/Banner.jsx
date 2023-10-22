import { useContext } from "react";

import { FaMusic } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
// import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user, loading } = useContext(AuthContext);
 


  return (
    <div
      
      style={{backgroundImage: 'url(https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg)'}}
      className="hero   min-h-[90vh]"
    >
      <div className="hero-overlay  bg-opacity-40"></div>
      <div  className=" text-center text-neutral-content">
        <div className="max-w-lg">
          {user ? (
            <>
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                Hello, {user.displayName}
              </h1>
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                Welcome to FutureTechWave.com
              </h1>
            </>
          ) : (
            <>
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                Welcome to FutureTechWave.com
              </h1>
            </>
          )}
          <p className="mb-5"></p>
          <Link>
            <button
              
              className="btn btn-ghost  bg-transparent hover:btn-neutral
           bottom-3   "
            >
              <FaMusic></FaMusic>Featured Phones...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;