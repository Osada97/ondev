import React from "react";
import router from "next/router";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LayOut({ children }) {
  console.log(children);

  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
