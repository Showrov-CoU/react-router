import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/service">Services</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
