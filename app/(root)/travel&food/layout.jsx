import React, { Suspense } from "react";

export const metadata = {
  title: {
    default: "Travel & Food",
    template: "%s | Travel & Food",
  },
  description:
    "The world's best places to visit, handpicked hotels, B&Bs, homestays and boutique stays, food experiences that linger long after you've had them, travel itineraries, adventures and guides. Curated by Shikha Gautam - all for the great love of travel and good.",
  openGraph: {
    title: {
      default: "Travel & Food",
      template: "%s | Travel & Food",
    },
    description:
      "The world's best places to visit, handpicked hotels, B&Bs, homestays and boutique stays, food experiences that linger long after you've had them, travel itineraries, adventures and guides. Curated by Shikha Gautam - all for the great love of travel and good.",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};

export default function Layout({ children, articles, destinations }) {
  return (
    <main>
      {children}
      {destinations}
      {articles}
    </main>
  );
}
