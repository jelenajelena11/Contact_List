import Head from "next/head";
import React from "react";
import NewContact from "../../components/newContact/NewContact";

export default function New() {
  return (
    <>
      <Head>
        <title>New</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewContact />
    </>
  );
}
