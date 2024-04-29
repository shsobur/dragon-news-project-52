import moment from "moment";
import "../../Style/Header.css";

const Header = () => {
  return (
    <div className="main_inner_conraier">
      <div className="main_header_conrain">
        <div>
          <img src="https://i.ibb.co/PzNvbvz/logo.png" />
          <h4 className="text-[#706f6f] text-center py-5">
            Journalism Without Fear or Favour
          </h4>
          <h3 className="text-[#403f3f] text-center text-xl">
            <span className="text-[#706f6f]">
              {moment().format("dddd, MMMM D YYYY")}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
