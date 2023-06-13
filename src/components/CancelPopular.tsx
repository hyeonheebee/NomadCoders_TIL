import { Link } from "react-router-dom";
import { CancleDiv } from "../App";

function CancelPopular() {
  return (
    <>
      <Link to={"/"}>
        {" "}
        <CancleDiv>x</CancleDiv>
      </Link>
    </>
  );
}

export default CancelPopular;
