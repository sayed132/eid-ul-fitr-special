import EidGallery from "./EidGallery/EidGallery";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="">
      <div className="my-8">
        <Hero />
      </div>
      <div className="my-8">
        <EidGallery />
      </div>
    </div>
  );
};

export default Home;
