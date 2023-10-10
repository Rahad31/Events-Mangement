import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Welcome from "../Welcome/Welcome";
import Expart from "../Expart/Expart";
import Gallery from "../Gallery/Gallery";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-4">
        <Slider></Slider>
        <Welcome></Welcome>
        <Services></Services>
        <Expart></Expart>
        <Gallery></Gallery>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
