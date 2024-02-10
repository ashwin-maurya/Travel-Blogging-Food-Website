export const metadata = {
  title: {
    template: "%s | Articles",
  },
  description: "This is the Articles Description",
  image: "https://nextjs.org/imgs/sticker.png",

  openGraph: {
    title: {
      template: "%s | Articles",
    },
    description: "This is the Articles of Kahaani Studio Description",
  },
  twitter: {
    card: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
