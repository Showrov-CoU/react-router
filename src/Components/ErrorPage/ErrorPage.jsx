import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Oopps!!!</h2>
      {error.status === 404 && (
        <div>
          <p>Page Not Found</p>
          <p>Go Back where you from</p>
          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
