import { Link } from "react-router-dom";
import { CancleDiv } from "../App";

function CancleNow() {
  return (
    <>
      <Link to={"/now-playing"}>
        {" "}
        <CancleDiv>x</CancleDiv>
      </Link>
    </>
  );
}

export default CancleNow;
