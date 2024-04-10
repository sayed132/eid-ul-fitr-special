import EidGallery from "./EidGallery/EidGallery";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="">
      <div className="my-4">
        <Hero />
      </div>
      <div className="mb-1">
        <EidGallery />
      </div>
    </div>
  );
};

export default Home;
