import ContactItem from "../../components/contactItem/ContactItem";
import Head from "next/head";
import React from "react";

export default function ContactItemDetails() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactItem />
    </>
  );
}
