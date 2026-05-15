import { atom } from "jotai";

import { INIT_COUNT, TimeAllotted } from "@/constants/atoms";

export const countAtom = atom(INIT_COUNT);
export const runningAtom = atom(false);
export const timeAtom = atom(TimeAllotted.MAX);
export const bestAtom = atom(TimeAllotted.MAX);
