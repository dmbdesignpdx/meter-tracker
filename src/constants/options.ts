import { OPTIONS } from "@/data/content";

export type OptionProp = (typeof OPTIONS)[number]["id"];
export type DefaultOptions = Record<OptionProp, boolean>;

export const INIT_OPTIONS = Object.fromEntries(
  OPTIONS.map((val) => [val.id, false]),
) as DefaultOptions;
