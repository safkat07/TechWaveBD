import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SectionOne = () => {
  return (
    <div className="w-full my-32  ">
      <h2 className="text-5xl mb-10 font-bold font-serif text-center">
        Going Sell On.....
      </h2>
      {/* main div */}
      <div className="grid gap-5 ml-[21px] md:ml-4 md:grid-cols-3 grid-cols-1">
        {/* 1st div starts */}
        <div className="flex  flex-col ">
          <div>
            
            <img  className="w-96 h-80 transform hover:scale-110 transition-transform duration-300" src="https://computermania-bd.b-cdn.net/wp-content/uploads/Razer-Blade-14-2022.jpg" alt="" />
           
          </div>
          <div>
            <p className="text-2xl my-4 font-bold mr-4 text-center font-sans">RAZER BLADE 14</p>
          </div>
          <div>
          <p className="text-xl  font-bold font-mono  text-center  w-96 ">
          Ultra-powerful, ultra-portable 14-inch gaming laptop with an AMD Ryzen™ 9 7940HS processor and NVIDIA® GeForce RTX™ 40 Series graphics.
          </p>
          </div>
          <div className="flex justify-center mt-5 gap-10">
            <button className="btn btn-success hover:btn ml-5">Buy now</button>
            <Link>
            <p className="text-xl flex items-center mt-2 gap-3 font-bold">Learn More <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></p>
            </Link>
          </div>
        </div>
         {/* 1st div ends */}
          {/* 2nd div starts */}
          <div className="flex flex-col ">
          <div>
            <img className="w-96 h-80 transform hover:scale-110 transition-transform duration-300" src="https://computermania-bd.b-cdn.net/wp-content/uploads/Razer-Blade-14-2022.jpg" alt="" />
          </div>
          <div>
            <p className="text-2xl my-4 font-bold mr-4 text-center font-sans">RAZER BLADE 15</p>
          </div>
          <div>
          <p className="text-xl font-bold font-mono flex text-center  w-96 ">
          Featuring the latest NVIDIA® GeForce RTX™ 40 Series GPUs, 13th Gen Intel® Core™ i7 Processor (14-Core), and the fastest displays.
          </p>
          </div>
          <div className="flex justify-center mt-12 gap-10">
            <button className="btn btn-success hover:btn ml-5">Buy now</button>
            <Link>
            <p className="text-xl flex items-center mt-2 gap-3 font-bold">Learn More <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></p>
            </Link>
          </div>
        </div>
        {/* 2nd div ends */}
        {/* 3rd div starts */}
        <div className="flex flex-col ">
          <div>
            <img className="w-96 h-80 transform hover:scale-110 transition-transform duration-300" src="https://computermania-bd.b-cdn.net/wp-content/uploads/Razer-Blade-14-2022.jpg" alt="" />
          </div>
          <div>
            <p className="text-2xl my-4 font-bold mr-4 text-center font-sans">RAZER BLADE 16</p>
          </div>
          <div>
          <p className="text-xl font-bold font-mono flex text-center w-96  ">
          16-inch gaming laptop featuring the world’s first dual-mode mini-LED display, a 13th Gen Intel® Core™ i9 HX processor, and NVIDIA® GeForce RTX™ 40 Series graphics.
          </p>
          </div>
          <div className="flex justify-center mt-5 gap-10">
            <button className="btn  btn-success hover:btn ml-5">Buy now</button>
            <Link>
            <p className="text-xl  flex items-center mt-2 gap-3 font-bold">Learn More <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></p>
            </Link>
          </div>
        </div>
        {/* 3rd div starts */}
      </div>
      {/* main div ends */}
    </div>
  );
};

export default SectionOne;
