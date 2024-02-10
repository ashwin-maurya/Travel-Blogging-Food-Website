import React from "react";

export const metadata = {
  title: {
    default: "Work with me",
    template: "%s | Work with me",
  },
  description:
    "Shikha Gautam is a digital content creator and is the brain behind Kahaani Studio. You can work with her for branded travel, food and lifestyle content, get your hotel/stay/retreat/food experiences reviewed and more. Drop an email at KahaaniStudio@gmail.com",
  openGraph: {
    title: {
      default: "Work with me",
      template: "%s | Work with me",
    },
    description:
      "Shikha Gautam is a digital content creator and is the brain behind Kahaani Studio. You can work with her for branded travel, food and lifestyle content, get your hotel/stay/retreat/food experiences reviewed and more. Drop an email at KahaaniStudio@gmail.com",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};
export default function layout({ children }) {
  return <main>{children}</main>;
}
