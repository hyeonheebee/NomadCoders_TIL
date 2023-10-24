import { atom } from "recoil";

export const isActiveAtom = atom({
  key: "isActive",
  default: false
});

export const timerSecondsAtom = atom({
  key: "timerSeconds",
  default: 60
});
export const timerMinutesAtom = atom({
  key: "timerMinutes",
  default: 25
});
export const counterAtomn = atom({
  key: "counter",
  default: 0
});
export const goalAtome = atom({
  key: "goal",
  default: 12
});
