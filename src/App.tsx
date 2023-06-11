import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isActiveAtom,
  timerSecondsAtom,
  timerMinutesAtom,
  counterAtomn,
  goalAtome,
  initialSecondsAtom,
  initialMinutesAtom,
  testNumAtom,
  isPauseAtom,
} from "./atoms";
import { AnimatePresence, motion } from "framer-motion";
const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body{
  font-family: 'Nanum Pen Script', cursive;
  background-color: tomato;
}
*{
  box-sizing:border-box;
}
a{
  text-decoration : none;
  color:inherit;
}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-size: 100px;
`;
const WrapperColumns = styled.div`
  height: 20%;
  width: auto;
  button {
    font-size: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: 50px;
    svg {
      width: 30px;
      margin-bottom: 1px;
      margin-left: 5px;
    }
  }
`;
const CardSection = styled(motion.div)`
  width: 100px;
  height: 150px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperCardSection = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 150px;
  height: 150px;
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
    transition: {
      duration: 1,
    },
  },
  exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
};

export default function App() {
  const [array, setArray] = useState<String[]>([]);

  let timerId: number | undefined;
  const [test, setTest] = useRecoilState(testNumAtom);
  const [initialMinutes, setInitialMinutes] =
    useRecoilState(initialMinutesAtom);
  const [initialSeconds, setInitialSeconds] =
    useRecoilState(initialSecondsAtom);

  const [isActive, setActive] = useRecoilState(isActiveAtom);
  const [timerSeconds, setTimerSeconds] = useRecoilState(timerSecondsAtom);
  const [timerMinutes, setTimerMinutes] = useRecoilState(timerMinutesAtom);
  const [counter, setCounter] = useRecoilState(counterAtomn);
  const [goal, setGoal] = useRecoilState(goalAtome);
  const [isPause, setPause] = useRecoilState(isPauseAtom);
  const [visible, setVisible] = useState(1);
  const nextplease = () =>
    setVisible((prev) =>
      prev === timerSeconds ? timerSeconds : timerSeconds - 1
    );
  // setTest((v) => (v = 60));
  // setInitialMinutes((minutes) => (minutes = 25));
  // setInitialSeconds((seconds) =>
  //   timerSeconds === 60 ? 0 : 60 - Math.floor(initialMinutes / 60)
  // );

  const toggleFn = () => {
    if (isActive) {
      setPause((prev) => !prev);
      setActive(false);
    }
    if (isPause) {
      setPause((prev) => !prev);
      setActive(true);
    }
    if (!isActive && !isPause) {
      setActive(true);
    }
    clearInterval(timerId);
  };

  const startMinuteTimer = () => {
    if (timerMinutes > 0) {
      setTimerMinutes((prev) => prev - 1);
      setTimerSeconds(
        timerSeconds === 60 ? 0 : 60 - Math.floor(timerMinutes / 60)
      );
      setArray((prevArray) => []);
    } else {
      clearInterval(timerId);
      setCounter((prev) => prev + 1);
      setTimerMinutes(initialMinutes);
      setTimerSeconds(initialSeconds);
    }
  };
  const startSecondTimer = () => {
    return setTimeout(() => {
      if (timerSeconds > 0) {
        setTimerSeconds((prev) => prev - 1);
      } else {
        startMinuteTimer();
      }
    }, 1000);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isActive) {
      startSecondTimer();
      setArray((prevArray) => [...prevArray, String(timerSeconds)]);
      nextplease();
    } else if (timerSeconds <= 0) {
      clearTimeout(timerId);
      startMinuteTimer();
    }
  }, [isActive, timerSeconds]);
  useEffect(() => {
    if (counter === 4) {
      setGoal((prev) => prev + 1);
      setCounter((crruent) => 0);
    }
  }, [counter]);
  useEffect(() => {
    if (goal === 12) {
      setCounter((current) => 0);
      setGoal((current) => 0);
      setTest(0);
      setActive(false);
    }
  }, [goal]);

  array.map((i) => (i === String(visible) ? console.log(i) : "hi"));
  array.map((i) => console.log(i));
  console.log("timerSEconds : ", timerSeconds);
  console.log("isPause :", isPause);
  console.log("isPause :", timerSeconds);
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <span>POMODORO</span>
        <WrapperColumns>
          {!isActive && !isPause ? (
            <WrapperCardSection>
              <CardSection>25</CardSection>:<CardSection>00</CardSection>
            </WrapperCardSection>
          ) : (
            <WrapperCardSection>
              <CardSection>{String(timerMinutes).padStart(2, "0")}</CardSection>
              :
              <AnimatePresence>
                <CardSection
                  variants={box}
                  initial="invisible"
                  animate="visible"
                  exit="exit"
                >
                  {array.map((i) =>
                    i === String(timerSeconds) ? (
                      i === String(60) ? (
                        <CardSection key={Number(i)}>00</CardSection>
                      ) : (
                        <CardSection key={Number(i)}>
                          {i.padStart(2, "0")}
                        </CardSection>
                      )
                    ) : null
                  )}
                  {isPause ? <div>{timerSeconds}</div> : null}
                  {/* {String(timerSeconds).padStart(2, "0")} */}
                </CardSection>
              </AnimatePresence>
            </WrapperCardSection>
          )}
        </WrapperColumns>
        <WrapperColumns>
          <button type="button" onClick={toggleFn}>
            {!isActive ? (
              <span>
                {/* play{" "} */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </span>
            ) : !isPause ? (
              <span>
                {/* pause */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path>
                </svg>
              </span>
            ) : (
              <span>
                {/* play{" "} */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </span>
            )}
          </button>
        </WrapperColumns>
        <WrapperColumns>
          <span>counter : {counter} / 4 </span>

          <span>goal : {goal} / 12</span>
        </WrapperColumns>
      </Wrapper>
    </>
  );
}
