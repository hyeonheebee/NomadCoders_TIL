import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;
/* const Biggerbox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`; */
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
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 800],
    [
      " linear-gradient(135deg, #00eaee, #0034ee)",
      " linear-gradient(135deg, #00ee3f, #ceee00)",
    ]
  );
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    // x.on("change", () => console.log(x.get()));
    rotate.on("change", () => console.log(rotate.get()));
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [rotate]);
  return (
    <Wrapper style={{ x, background }}>
      <button onClick={() => x.set(200)}>click ME</button>
      <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default Root;
