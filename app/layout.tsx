
export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Finserv Banking Applcation",
  description: "Finserv is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const path = usePathname();
  //  const showSidebar = path ! == "/pay"
  return (
    <>
    <SideBar />
    <html lang="en" className="flex-1 border border-red-800">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {/* Add padding-top to give space for the Navbar */}
        <div className="pt-[120px]"> {/* Adjust pt-[70px] based on your Navbar height */}
          <Navbar /> 
          <div className="">{children}</div> {/* Content */}
        </div>
      </body>
    </html>

    {/* Footer: Apply margin-top to push it down, if needed */}
    <div className="mt-[500px] w-5/4 ml-[250px]">
      <Footer />
    </div>
    </>

  );
}