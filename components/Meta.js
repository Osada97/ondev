import React from "react";
import Head from "next/head";

export default function Meta({ title = "OnDev", keywords, description }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ONdev technologies is a Sri Lankan startup company , which operates projects related to web development,  virtual systems and sustainable applications with ICT , in the fields of business and technology."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
}
