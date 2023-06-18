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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;

  font-family: "Bangers", cursive;
  ul {
    display: flex;
    justify-content: center;
  }
  img {
    margin-top: 10px;
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
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};
export const CancleDiv = styled.div`
  svg {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    color: black;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      color: #f5f42c;
    }
  }
`;
export const HeartDiv = styled(motion.div)`
  color: rgb(128, 128, 128);
  width: 20px;
  margin-right: 5px;
`;
