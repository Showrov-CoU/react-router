import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, website } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div style={userStyle}>
      <h2>Name:{name} </h2>
      <p>UserName: {username} </p>
      <p>Website:{website} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <br />
      <button onClick={handleDetails}>click for details</button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};
export default User;
