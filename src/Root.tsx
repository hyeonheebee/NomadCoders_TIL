import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { stringify } from "querystring";
const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {};

function Root() {
  return (
    <>
      <Wrapper>
        <Box
          whileHover={{ scale: 1.5, rotateZ: 90 }}
          whileTap={{ scale: 1, borderRadius: "100px" }}
        />
      </Wrapper>
    </>
  );
}
export default Root;
