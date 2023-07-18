import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <PopularInstructors></PopularInstructors>
      </div>
    </>
  );
};

export default Home;
