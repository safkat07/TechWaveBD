import { useLoaderData } from "react-router-dom";
import SectionOne from "../../ExtraSection/SectionOne/SectionOne";
import SectionTwo from "../../ExtraSection/SectionTwo/SectionTwo";
import SixBrandSection from "../../ProductComponents/SixBrandSection/SixBrandSection";
import ToTheTop from "../../ToTheTop/ToTheTop";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-5xl text-center my-32 font-bold font-serif">
          We areOffering
        </h2>
      <div className="max-w-7xl  mx-auto">
      <div className="grid md:ml-4 grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* <SixBrandSection></SixBrandSection> */}
        { brands.map((brand) => (
          <SixBrandSection key={brand.id} brand={brand}></SixBrandSection>
        ))}
      </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto">
          <SectionOne></SectionOne>
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionTwo></SectionTwo>
        </div>
      </div>
      <ToTheTop></ToTheTop>
      <Footer></Footer>
    </div>
  );
};

export default Home;
