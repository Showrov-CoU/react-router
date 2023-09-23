import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  console.log(userid);
  const handleGoBack = () => {
    navigate(-1);
  };
  const user = useLoaderData();
  const { name, email, phone } = user;
  return (
    <div>
      <h1>user info</h1>
      <div>
        <h2>Name:{name} </h2>
        <p>Email:{email} </p>
        <p>Phone:{phone} </p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
