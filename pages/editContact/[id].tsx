import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { ContactProps } from "../../components/contacts/Contact";
import EditContactItem from "../../components/editContact/EditContactItem";
import contacts from "../../mock/db.json";

export default function EditContact({ contact }: ContactProps) {
  return (
    <>
      <Head>
        <title>Edit</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditContactItem contact={contact} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const contact = contacts.filter((c) => c.id.toString() === context.params.id);
  return {
    props: {
      contact: contact[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = contacts.map((contact) => ({
    params: { id: contact.id.toString() },
  }));
  return { paths, fallback: false };
};
