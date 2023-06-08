import NavigationBar from "../../sharedPages/NavigationBar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <h2>This is HOME</h2>
    </div>
  );
};

export default Home;
