import "../../Style/Home.css";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import RigthSideNav from "../../components/RigthSideNav/RigthSideNav";
import Header from "../Header/Header";
import Marquee from "react-fast-marquee";
import Navebar from "../Navebar/Navebar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="breaking_news_conrainer">

        <div className="breaking_news_onner_conrain">
          <button className="btn border-none rounded-none hover:bg-[#d72050] px-7 text-xl bg-[#d72050] text-white">
            Latest
          </button>
          <Marquee className="text-black font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>

      </div>
      <Navebar></Navebar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2">
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="border-2 md:grid-cols-2">News comming soon......</div>

        <div className="border-2">
          <RigthSideNav></RigthSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
