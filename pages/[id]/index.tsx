import Head from "next/head";
import React from "react";
import ContactDetails from "../../components/contactItemDetails/ContactDetails";
import contacts from "../../mock/db.json";

export default function ContactItemDetails({ allContacts }: any) {
  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactDetails
        id={allContacts.id}
        firstName={allContacts.firstName}
        lastName={allContacts.lastName}
        profilePhoto={allContacts.profilePhoto}
        email={allContacts.email}
        favourite={allContacts.favourite}
        phones={allContacts.phones}
      />
    </>
  );
}

export const getStaticProps = async (context: any) => {
  const allContacts = contacts.filter(
    (c) => c.id.toString() === context.params.id
  );
  return {
    props: {
      allContacts: allContacts[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = contacts.map((contact) => ({
    params: { id: contact.id.toString() },
  }));
  return { paths, fallback: false };
};
