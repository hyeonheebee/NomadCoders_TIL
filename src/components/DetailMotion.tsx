import styled from "styled-components";
import { motion } from "framer-motion";
export const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  color: black;
  position: fixed;
  width: 50%;
  height: 60%;
  top: 20%;
`;
export const overlay = {
  visible: {
    opacity: 1,
    zIndex: 3,
  },
  exit: {
    opacity: 0,
    zIndex: -1,
  },
  initial: {
    opacity: 0,
    zIndex: -1,
  },
};
export const Img = styled.img`
  width: 100px;
  height: 150px;
`;

export const CollectionBtn = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &: hover {
    cursor: pointer;
  }
`;
export const DetailSection = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  margin: 20px 25px;
  padding: 50px 25px;
  border-radius: 20px;
  height: 60%;
  width: 50%;
  position: inherit;
  overflow-y: scroll;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background: white;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.5);
  }
`;
export const DetailDescript = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    color: tomato;
  }
`;
export const GenresUl = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin-left: 10px;
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
`;
