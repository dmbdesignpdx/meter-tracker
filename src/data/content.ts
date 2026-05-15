export const OPTIONS = [
  {
    id: "option-1",
    name: "Leaks",
  },
  {
    id: "option-2",
    name: "Stray current",
  },
  {
    id: "option-3",
    name: "Vent screen",
  },
] as const;

export const Heading = {
  CHECKLIST: "Check for...",
  USER: "User Information",
  BEST: "Your Fastest Survey:",
} as const;

export const Copy = {
  USER: "Some data on your performance.",
  TOTAL: "Total services:",
  NO_RECORD: "Nothing yet!",
} as const;

export const Label = {
  SERVICES: "Total services",
  SETTINGS: "Settings",
  SAVE: "Save",
  RESET: "Reset",
  START: "Start",
  CLOSE: "Close",
  SECONDS: "seconds",
} as const;

export const Alert = {
  COMPLETED: "Survey completed!",
  SAVED: "Settings saved!",
  RECORD: "New record!",
} as const;
