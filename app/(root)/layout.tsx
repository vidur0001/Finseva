export const dynamic = 'force-dynamic'
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

export default function RootLayout({
   
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   
  return (
    <main>
      <div className="main-page">
        <div className="sidebar w-{300px} h-{800px} static">
        </div>
      </div>
      <>
        {/* <div className="bg-blue-500">SIDEBAR</div> */}
        {/* <SideBar/> */}
        <div className="h-screen ml-65 max-w-screen min-w-30 ">
        {children} {/* Passed Children as a prop*/}
        </div>
        {/* <Footer/> */}
        </>
    </main>
  );
}