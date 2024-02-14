import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phone Sine",
  description: "Developed by Phone Sine Members",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
