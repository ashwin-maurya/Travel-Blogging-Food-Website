import "./globals.css";
import Navbar from "./_components/common/Navbar";
import Footer from "./_components/common/Footer";
import ScrollProgress from "./_components/common/ScrollProgress";
import ScrollToTop from "./_components/common/ScrollToTop";

export const metadata = {
  title: {
    default: "Kahaani Studio",
    template: "%s | Kahaani Studio",
  },
  description:
    "Kahaani Studio is created by Shikha Gautam. It is a collection of the best that’s happening in the world of travel & hospitality, including handpicked stays, unforgettable food experiences, mythology & folk tales, indigenous cultures - their practices and rituals, and about people you cannot forget easily.",
  openGraph: {
    title: "Kahaani Studio",
    description:
      "Kahaani Studio is created by Shikha Gautam. It is a collection of the best that’s happening in the world of travel & hospitality, including handpicked stays, unforgettable food experiences, mythology & folk tales, indigenous cultures - their practices and rituals, and about people you cannot forget easily.",
    images: "https://nextjs.org/imgs/og-image.png",
  },
  image: "https://nextjs.org/imgs/sticker.png",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" container">
          <Navbar />
          <ScrollProgress />
          <ScrollToTop />

          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
