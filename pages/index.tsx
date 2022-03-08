import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React from "react";
import Header from "../components/layout/header/Header";
import ListContainerButton from "../components/ui/button/ListContainerButton";
import contacts from "../mock/db.json";
import { ContactsList } from "../components/contacts/Contact";

const Home = ({ contacts }: ContactsList) => {
  return (
    <>
      <Head>
        <title>All Contacts</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ListContainerButton />
      <ContactList contacts={contacts} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      contacts: contacts,
    },
    revalidate: 1,
  };
}

export default Home;
