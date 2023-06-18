import styled from "styled-components";
import { motion } from "framer-motion";
export const ContainerWrapper = styled(motion.div)`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 50px 10px;
`;
export const Container = styled(motion.div)`
  width: 50%;
  height: 30%;

  ul {
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const MovieListVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
export const containerVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};
export const CancleDiv = styled.div`
  button {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: tomato;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
