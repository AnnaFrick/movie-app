import React from "react";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
