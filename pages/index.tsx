import axios from "axios";
import Head from "next/head";
import ContactList from "../components/contacts/ContactList";
import React, { useState } from "react";
import Header from "../components/layout/header/Header";
import ListContainer from "../components/layout/listContainer/ListContainer";

const Home = ({ contacts }: any) => {
  const [contactList, setContactList] = useState();
  const [favourites, setFavourites] = useState();
  return (
    <>
      <Head>
        <title>Contact List</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ListContainer
        setContactList={setContactList}
        setFavourites={setFavourites}
      >
        {/* {contactList && <ContactList contacts={contacts} />} */}
        {favourites && <p>Jej</p>}
      </ListContainer>
      <ContactList contacts={contacts} />
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
