import "../../Style/Home.css";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import RigthSideNav from "../../components/RigthSideNav/RigthSideNav";
import Header from "../Header/Header";
import Navebar from "../Navebar/Navebar";

const Home = () => {
  return (
    <div>
      <Header></Header>
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
