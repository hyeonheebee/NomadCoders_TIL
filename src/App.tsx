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
  isPauseAtom
} from "./atoms";
export default function App() {
  let timerId: number | undefined;
  const [test, setTest] = useRecoilState(testNumAtom);
  const [initialMinutes, setInitialMinutes] = useRecoilState(
    initialMinutesAtom
  );
  const [initialSeconds, setInitialSeconds] = useRecoilState(
    initialSecondsAtom
  );
  setTest((v) => (v = 60));
  setInitialMinutes((minutes) => (minutes = 24));
  setInitialSeconds(
    (seconds) =>
      (seconds = seconds >= 60 ? 0 : Math.ceil(test - initialMinutes / test))
  );

  // const test = useRecoilValue(testNumAtom);
  // const initialMinutes = useRecoilValue(initialMinutesAtom);
  // const initialSeconds = useRecoilValue(initialSecondsAtom);
  const [isActive, setActive] = useRecoilState(isActiveAtom);
  const [timerSeconds, setTimerSeconds] = useRecoilState(timerSecondsAtom);
  const [timerMinutes, setTimerMinutes] = useRecoilState(timerMinutesAtom);
  const [counter, setCounter] = useRecoilState(counterAtomn);
  const [goal, setGoal] = useRecoilState(goalAtome);
  const [isPause, setPause] = useRecoilState(isPauseAtom);

  const toggleFn = () => {
    clearInterval(timerId);
    if (isActive) {
      setPause((prev) => !prev);
      setActive(false);
    }
    if (isPause) {
      setActive(true);
      setPause((prev) => !prev);
    }
    if (!isActive && !isPause) {
      setActive(true);
    }
  };

  const startMinuteTimer = () => {
    if (timerMinutes > 0) {
      setTimerMinutes((prev) => prev - 1);
      setTimerSeconds(Math.floor(test - timerMinutes / test));
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
    }, 10);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isActive) {
      startSecondTimer();
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
      setInitialMinutes(0);
      setInitialSeconds(0);
      setActive(false);
    }
  }, [goal]);
  console.log(initialMinutes, initialSeconds, goal, counter, isActive);
  return (
    <>
      <div>
        <span>
          {/* 만약 ispause가 true일때도 timer이 보이고, isActive가 true일때도 타이머가 보인다 
          단 pause버튼을 누르면 ispause는 false로 바뀌고 그때는 현재 시간 타이머가 보인다. 
          25:00 이 보일때는 isActive 가 false일때 뿐이다 */}
          {!isActive && goal === 12 ? (
            <span>00:00</span>
          ) : !isActive && !isPause && goal !== 12 ? (
            <span>
              {timerMinutes}:{timerSeconds}
            </span>
          ) : (
            <span>
              {timerMinutes}:{timerSeconds}
            </span>
          )}
        </span>

        <button onClick={toggleFn}>
          {!isActive ? (
            <span>play</span>
          ) : !isPause ? (
            <span>pause</span>
          ) : (
            <span>play</span>
          )}
        </button>
      </div>
      <span>counter : {counter} / 4 </span>

      <span>goal : {goal} / 12</span>
    </>
  );
}
