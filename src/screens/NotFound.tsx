import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Sorry, NotFound</h1>
      <Link to={"/"}> Back to Home</Link>
    </>
  );
}
export default NotFound;
