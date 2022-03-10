import Head from "next/head";
import Header from "../../components/layout/header/Header";
import ListContainerButton from "../../components/ui/button/ListContainerButton";
import FavouritesList from "../../components/favourites/FavouritesList";
import contacts from "../../mock/db.json";
import { ListOfFavourites } from "../../components/contacts/Contact";

export default function Favourites({ favourites }: ListOfFavourites) {
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

export async function getStaticProps() {
  const data = contacts.filter((contact: any) => contact.favourite === true);
  return {
    props: {
      favourites: data,
    },
    revalidate: 1,
  };
}
