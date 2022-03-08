import Head from "next/head";
import React from "react";
import EditContactItem from "../../components/editContact/EditContactItem";

export default function EditContact() {
  return (
    <>
      <Head>
        <title>Edit Contact</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditContactItem />
    </>
  );
}
