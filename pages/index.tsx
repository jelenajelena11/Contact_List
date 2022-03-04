import axios from "axios";
import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React from "react";
import Header from "../components/layout/header/Header";

const Home = ({ contacts }: any) => {
  return (
    <>
      <Head>
        <title>Contact List</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <ListContainer> */}
      <ContactList contacts={contacts} />
      {/* </ListContainer> */}
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/contacts");
  const data = response.data;
  return {
    props: {
      contacts: data,
    },
    revalidate: 1,
  };
}

export default Home;
