import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>Catsbook</h1>
      <Link to="/saved">
        <h2>Saved</h2>
      </Link>
    </div>
  );
};

export default Header;
