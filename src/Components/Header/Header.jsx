import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/service">Services</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
