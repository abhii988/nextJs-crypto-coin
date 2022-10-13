import React from "react";
import Navbar from "./Navbar";
import SSRProvider from "react-bootstrap/SSRProvider";

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Navbar />
      <div>{children}</div>
    </SSRProvider>
  );
};

export default Layout;
