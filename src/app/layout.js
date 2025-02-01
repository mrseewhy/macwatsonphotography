import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Navbar";
import { Exo, Lato } from 'next/font/google';

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body
  className={`${exo.variable} ${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
>
      <Layout>
          {children}
        </Layout>
        
      </body>
    </html>
  );
}
