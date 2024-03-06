import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
// import Modal from "./components/modals/Modal";
import LoginModel from "./components/modals/LoginModel";
import SignUpModel from "./components/modals/SignUpModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Djbnb",
  description: "Djbnb by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>Yo</p>;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
        {/* <Modal label="Modal test" content={content} isOpen={false} /> */}
        <LoginModel />
        <SignUpModel />
      </body>
    </html>
  );
}
