import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* --- Font Configuration --- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* --- SEO Metadata --- */
export const metadata = {
  title: "Premium WebServices & Co. | Digital Infrastructure for Growing Enterprises",
  description:
    "Premium web design, development, and social media management for growing enterprises. " +
    "Book a qualifying consultation or claim your complimentary performance audit.",
  keywords: [
    "web design",
    "web development",
    "social media management",
    "digital agency",
    "premium web services",
  ],
  openGraph: {
    title: "Premium WebServices & Co.",
    description: "Digital Infrastructure for Growing Enterprises.",
    type: "website",
  },
};

/**
 * Root layout — wraps all pages with fonts, header, and footer.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
