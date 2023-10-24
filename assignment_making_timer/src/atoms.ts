import { atom } from "recoil";

export const testNumAtom = atom({
  key: "testNum",
  default: 60,
});
export const initialMinutesAtom = atom({
  key: "initialMinutes",
  default: 25,
});
export const initialSecondsAtom = atom({
  key: "initialSeconds",
  default: 0,
});
export const isActiveAtom = atom({
  key: "isActive",
  default: false,
});
export const isPauseAtom = atom({
  key: "isPause",
  default: false,
});
export const timerSecondsAtom = atom({
  key: "timerSeconds",
  default: 0,
});
export const timerMinutesAtom = atom({
  key: "timerMinutes",
  default: 25,
});
export const counterAtomn = atom({
  key: "counter",
  default: 0,
});
export const goalAtome = atom({
  key: "goal",
  default: 12,
});
export const isResetAtom = atom({
  key: "isReset",
  default: false,
});
