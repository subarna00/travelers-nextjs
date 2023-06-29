import "./globals.css";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";
import RegisterModel from "./components/modals/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "My Travel Book",
  description: "My Travel Book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModel />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
