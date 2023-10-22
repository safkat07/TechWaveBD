import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SectionTwo = () => {
  return (
    <div className="my-20">
        <h2 className="text-5xl mb-10 font-bold font-serif text-center">
        Latest Flagship
      </h2>
      <div className="md:ml-4">
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2">
          <img
           className="transform hover:scale-110 transition-transform duration-300"
            src="https://images.samsung.com/bd/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg"
            alt=""

          />
        </div>
        <div className="md:w-1/2 mt-20">
          <p className="text-3xl font-sans  font-bold text-center">
            Samsung Galaxy S23 Ultra
          </p>
          <p className="md:text-left ml-5 w-96 text-center font-mono mt-5 md:ml-10 font-semibold">
            Galaxy S23 Ultra offers the highest resolution yet on a Galaxy
            smartphone at 200MP, compared to S22 Ultra's 108MP. With the same
            5000mAh (typical) battery as S22 Ultra, Galaxy S23 Ultra delivers up
            to roughly 26 hours of video playback and more efficient performance
            thanks to improved processing power
          </p>
          <div className="flex justify-center mt-5 gap-10">
            <button className="btn btn-success hover:btn ml-5">Buy now</button>
            <Link>
              <p className="text-xl flex items-center mt-2 gap-3 font-bold">
                Learn More{" "}
                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
              </p>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
