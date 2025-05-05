
import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-row sm:pl-10">
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-hidden">
        <main className="flex-grow overflow-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
