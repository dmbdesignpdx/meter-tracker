export const MetaData = {
  title: "Survey Tracker",
  description: "A simple app to track your surveying progress at the meter.",
  author: {
    name: "Daniel Blake",
    email: "daniel@danielblake.dev",
    website: "https://danielblake.dev",
  },
};

export const AppData = {
  name: MetaData.title,
  shortName: MetaData.title,
  description: MetaData.description,
  start: "/",
  bkgColor: "#ffffff",
  themeColor: "#000000",
  author: MetaData.author.name,
};

export const Url = {
  BASE: new URL("https://survey-track.netlify.app"),
  AUTHOR: new URL(MetaData.author.website),
  NETWORK: "192.168.0.208",
} as const;
