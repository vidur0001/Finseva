// app/layout.tsx

"use client"; // Ensure this is at the top for client-side rendering

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Client-side hook to get current path
import SideBar from "@/components/SideBar"; // Sidebar component
import Footer from "@/components/Footer"; // Footer component
import Navbar from "@/components/Navbar"; // Navbar component

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current path
  const [showSidebar, setShowSidebar] = useState(true); // State to manage sidebar visibility

  useEffect(() => {
    // Hide the sidebar when the pathname is '/pay'
    if (pathname === "/pay") {
      setShowSidebar(false); // Hide Sidebar on /pay
    } else {
      setShowSidebar(true); // Show Sidebar on other pages
    }
  }, [pathname]); // Effect depends on pathname changes

  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {/* Conditionally render the Sidebar */}
        {showSidebar && <SideBar />} 
        
        {/* Main content area, adjusted based on sidebar visibility */}
        <div className={`ml-${showSidebar ? 64 : 0} p-6`}>{children}</div> {/* Adjusted based on sidebar presence */}
        
        <Footer />
      </body>
    </html>
  );
}
