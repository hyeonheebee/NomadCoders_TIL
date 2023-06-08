import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { stringify } from "querystring";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Biggerbox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(251, 197, 49)",
    transition: {
      duration: 10,
    },
  },
};

function Root() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Wrapper>
        <Biggerbox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={biggerBoxRef}
            variants={boxVar}
            whileHover="hover"
            whileTap="click"
          />
        </Biggerbox>
      </Wrapper>
    </>
  );
}
export default Root;
