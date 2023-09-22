import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone } = user;
  return (
    <div>
      <h1>user info</h1>
      <div>
        <h2>Name:{name} </h2>
        <p>Email:{email} </p>
        <p>Phone:{phone} </p>
      </div>
    </div>
  );
};

export default UserDetails;
