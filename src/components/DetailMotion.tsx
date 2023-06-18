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
  height: 50%;
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
  width: 100%;
  height: auto;
`;

export const CollectionBtn = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &: hover {
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const DetailSection = styled.div`
  border: 5px rgba(0, 0, 0, 0.7) solid;
  h1 {
    font-family: "Permanent Marker", cursive;
  }
  img {
    border-radius: 10px;
  }
  margin: 20px 25px;
  padding: 50px 25px;
  border-radius: 20px;
  height: 50%;
  width: 50%;
  position: inherit;
  overflow-y: scroll;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    height: 20%;
    background: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.5);
  }
  p {
    font-weight: 400;
    font-size: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
`;

export const DetailDescript = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
    margin-top: 5px;
  }
  div {
    span {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      font-weight: 600;
    }
  }

`;
export const HPWrapper = styled.div`
  display: flex;
    span {
    color: black;
    font-size: 20px;
    font-weight: 700;
    margin-bottom:20px;
  }
  a {
      font-size: 18px;
    color: blue;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
`;
export const GenresUl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    font-size: 20px;
    font-weight: 700;
  }
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
