import "../../Style/RightSideNav.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const RigthSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="font-bold text-xl pb-5">Login With</h2>

        <div className="mb-4">
          <button className="btn outline hover:bg-[#ffffff] hover:text-[#1e79d4] w-full text-lg font-medium">
            <FcGoogle className="text-3xl"></FcGoogle>
            Login With Google
          </button>
        </div>

        <div>
          <button className="btn outline hover:bg-[#ffffff] hover:text-[#1e79d4] w-full text-lg font-medium">
            <FaGithub className="text-3xl"></FaGithub>
            Login With Github
          </button>
        </div>
      </div>

      <div className="main_findus_conrainer">
        <h2 className="font-bold text-xl pb-5">Find Us On</h2>
        <div className="fintus_inner_conrain">
          <div className="social_box text-xl font-semibold text-[#706f6f] flex items-center">
            <FaFacebook className="text-4xl text-[#000000] mr-3"></FaFacebook>
            <a href="#">Facebook</a>
          </div>

          <div className="social_box border-t-2 border-b-2 text-xl font-semibold text-[#706f6f] flex items-center">
            <FaTwitter className="text-4xl text-[#000000] mr-3"></FaTwitter>
            <a href="#">Twitter</a>
          </div>

          <div className="social_box text-xl font-semibold text-[#706f6f] flex items-center">
            <FaInstagram className="text-4xl text-[#000000] mr-3"></FaInstagram>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="w_zone_main_conrainer">
        <h2 className="font-bold text-xl pb-5">Q-Zone</h2>
        <div className="image_box">
          <img src="https://i.ibb.co/Jcw3HNV/qZone1.png" />
        </div>

        <div className="image_box py-5">
          <img src="https://i.ibb.co/88xRxZt/qZone2.png" />
        </div>

        <div className="image_box pb-5">
          <img src="https://i.ibb.co/phGsMJt/qZone3.png" />
        </div>
      </div>

      <div className="main_newspaper_bener_container">
        <div className="main_iner_beber_contain">
          <div className="">
            <h2 className="text-3xl font-bold text-[#ffffff] leading-10 text-center pt-16 px-7">
              Create an Amazing Newspaper
            </h2>
            <p className="text-base font-normal text-[#ffffff] leading-6 text-center py-10 px-16">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <div className="flex justify-center pb-16">
              <button className="btn border-none rounded-none px-5 hover:bg-[#d72050] text-xl bg-[#d72050] text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthSideNav;
