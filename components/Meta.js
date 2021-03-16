import React from "react";
import Head from "next/head";

export default function Meta({ title = "OnDev", keywords, description }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
}
