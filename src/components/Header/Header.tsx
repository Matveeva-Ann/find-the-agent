import { Link } from "react-router-dom";
import "./Header.scss";
import frame from "../../assets/icons/Frame.svg";
import logo from "../../assets/icons/LuxuryPropertySpecialist.svg";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logoLink">
        <img src={logo} alt="Logo" className="header__logo" />
        <h1 className="header__title">CompanyLogo</h1>
      </Link>
      <div className="header__content">
        <p className="header__slogan">Find the best agent to sell your property</p>
        <p className="header__sloganQuestion">What’s your property worth?</p>
        <img src={frame} alt="frame" />
      </div>
    </div>
  );
}
