import axios from "axios";
import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React from "react";
import Header from "../components/layout/header/Header";
import ListContainerButton from "../components/ui/button/ListContainerButton";

const Home = ({ contacts }: any) => {
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
  const response = await axios.get(
    "https://mocki.io/v1/6fc5fa46-dcbc-4a47-affa-3533eac528c6"
  );
  const data = response.data;
  return {
    props: {
      contacts: data,
    },
    revalidate: 1,
  };
}

export default Home;
