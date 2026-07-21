export const INIT_COUNT = 0;

export const TimeAllotted = {
  MAX: 30,
  get WARN() {
    return Math.floor(this.MAX * 0.3333);
  },
  get LATE() {
    return Math.floor(this.MAX * 0.1666);
  },
};
