import "./globals.css";
import Layout from "@/components/Navbar";
import { Exo, Lato } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400',
});


export const metadata = {
  title: "Macwatson Photography",
  description: "Macwatson Photography, world class Photograpy from lagos to the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
  className={`${exo.variable} ${lato.variable} antialiased`}
>
      <Layout>
          {children}
          <Analytics/>
          <SpeedInsights/>
        </Layout>
        
      </body>
    </html>
  );
}
