import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React, { useEffect, useState } from "react";
import ListContainerButton from "../components/ui/button/ListContainerButton";
import { Contact, ContactsList } from "../components/contacts/Contact";
import { fetchData } from "../mock/fetchData";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    const data = fetchData() as Contact[];
    setContacts(data);
  }, []);

  const onDataUpdated = () => {
    const data = fetchData() as Contact[];
    setContacts(data);
  };

  return (
    <>
      <Head>
        <title>All Contacts</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListContainerButton />
      <ContactList contacts={contacts} onDataUpdated={onDataUpdated} />
    </>
  );
};

export default Home;
