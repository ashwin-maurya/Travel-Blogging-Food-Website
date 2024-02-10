import React from "react";

export const metadata = {
  title: {
    default: "Lifestyle, Legends & Stories",
    template: "%s | Lifestyle, Legends & Stories",
  },
  description:
    "How cool is a Ford Bronco? Does meditation really change your life? Did Christ actually spend his last days in Kashmir? What was the world's first car like? About Kannauj's unforgettable mitti attar. Kahaani Studio by Shikha Gautam digs further.",
  openGraph: {
    title: {
      default: "Lifestyle, Legends & Stories",
      template: "%s | Lifestyle, Legends & Stories",
    },
    description:
      "How cool is a Ford Bronco? Does meditation really change your life? Did Christ actually spend his last days in Kashmir? What was the world's first car like? About Kannauj's unforgettable mitti attar. Kahaani Studio by Shikha Gautam digs further.",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};
export default function layout({ children }) {
  return <main>{children}</main>;
}
