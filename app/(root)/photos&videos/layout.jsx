import React from "react";

export const metadata = {
  title: {
    default: "Photos & Videos",
    template: "%s | Photos & Videos",
  },
  description:
    "Shikha picked up a camera, a humble Kodak KB10, very early in her childhood. An ardent fan of good glass and cameras, this is her collection of photos and videos from some of the most stunning places and experiences.",
  openGraph: {
    title: {
      default: "Photos & Videos",
      template: "%s | Photos & Videos",
    },
    description:
      "Shikha picked up a camera, a humble Kodak KB10, very early in her childhood. An ardent fan of good glass and cameras, this is her collection of photos and videos from some of the most stunning places and experiences.",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};
export default function layout({ children }) {
  return <main>{children}</main>;
}
