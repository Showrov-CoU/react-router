import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, website } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>Name:{name} </h2>
      <p>UserName: {username} </p>
      <p>Website:{website} </p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};
export default User;
