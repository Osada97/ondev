import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LayOut({ children }) {
  const [navType, setnavType] = useState(true);

  const { pathname } = useRouter();

  const routing = ["/", "/about"];

  useEffect(() => {
    if (routing.includes(pathname)) {
      setnavType(true);
    } else {
      setnavType(false);
    }
  }, []);

  return (
    <div>
      <Nav navType={navType} />
      {children}
      <Footer />
    </div>
  );
}
