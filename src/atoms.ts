import { atom } from "recoil";

// const initialMinutes = 1;
// const test = 5;
// const initialSeconds = Math.floor(test - initialMinutes / test);

export const testNumAtom = atom({
  key: "testNum",
  default: 0
});
export const initialMinutesAtom = atom({
  key: "initialMinutes",
  default: 0
});
export const initialSecondsAtom = atom({
  key: "initialSeconds",
  default: 0
});
export const isActiveAtom = atom({
  key: "isActive",
  default: false
});
export const isPauseAtom = atom({
  key: "isPause",
  default: false
});
export const timerSecondsAtom = atom({
  key: "timerSeconds",
  default: initialSecondsAtom
});
export const timerMinutesAtom = atom({
  key: "timerMinutes",
  default: initialMinutesAtom
});
export const counterAtomn = atom({
  key: "counter",
  default: 0
});
export const goalAtome = atom({
  key: "goal",
  default: 12
});
