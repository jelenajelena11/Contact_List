import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React, { useEffect, useState } from "react";
import Header from "../components/layout/header/Header";
import ListContainerButton from "../components/ui/button/ListContainerButton";
import { Contact, ContactsList } from "../components/contacts/Contact";
import { useData } from "../mock/useData";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    setContacts(useData());
  }, []);

  return (
    <>
      <Head>
        <title>All Contacts</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <ListContainerButton />
      <ContactList contacts={contacts} />
    </>
  );
};

export default Home;
