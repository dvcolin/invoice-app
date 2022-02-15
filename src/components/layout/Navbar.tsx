import { Link } from "react-router-dom";
import "../../scss/components/layout/Navbar.scss";
import logo from "../../assets/logo.svg";
import moonIcon from "../../assets/icon-moon.svg";
import profileImage from "../../assets/image-avatar.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__logo-link" to="/">
        <div className="navbar__logo-box">
          <img className="navbar__logo" src={logo} alt="Invoice App logo" />
          <div className="navbar__logo-box-accent" />
        </div>
      </Link>
      <div className="navbar__content">
        <div className="navbar__theme-toggle-box">
          <button className="navbar__theme-toggle-button">
            <img
              className="navbar__theme-toggle-icon"
              src={moonIcon}
              alt="Toggle theme"
            />
          </button>
        </div>
        <div className="navbar__profile-box">
          <img
            className="navbar__profile-image"
            src={profileImage}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
