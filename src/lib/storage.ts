import { BEST_SCORE } from "@/constants/storage";

export function setTimeStorage(time: number) {
  if (window?.localStorage.getItem(BEST_SCORE)) {
    window.localStorage.setItem(BEST_SCORE, String(time));
  }
}
