import Head from "next/head";
import Header from "../../components/layout/header/Header";
import ListContainerButton from "../../components/ui/button/ListContainerButton";
import FavouritesList from "../../components/favourites/FavouritesList";
import { Contact, ListOfFavourites } from "../../components/contacts/Contact";
import { useEffect, useState } from "react";
import { fetchData } from "../../mock/fetchData";

export default function Favourites() {
  const [favourites, setFavourites] = useState<Contact[]>([]);
  useEffect(() => {
    const data = fetchData() as Contact[];
    setFavourites(data.filter((data) => data.favourite));
  }, []);
  return (
    <>
      <Head>
        <title>My Favourites</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListContainerButton />
      <FavouritesList favourites={favourites} />
    </>
  );
}
