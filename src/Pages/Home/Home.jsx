import Banner from "./Banner/Banner";
import Contact from "./Contact";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <PopularClasses/>
        <PopularInstructors></PopularInstructors>
        <Reviews/>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
