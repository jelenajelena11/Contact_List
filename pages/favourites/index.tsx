import Head from "next/head";
import Header from "../../components/layout/header/Header";
import ListContainerButton from "../../components/ui/button/ListContainerButton";
import axios from "axios";
import FavouritesList from "../../components/favourites/FavouritesList";

export default function Favourites({ favourites }: any) {
  return (
    <>
      <Head>
        <title>My Favourites</title>
        <meta name="description" content="Browse a list of contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ListContainerButton></ListContainerButton>
      <FavouritesList favourites={favourites} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://mocki.io/v1/6fc5fa46-dcbc-4a47-affa-3533eac528c6"
  );
  const data = response.data.filter(
    (contact: any) => contact.favourite === true
  );
  return {
    props: {
      favourites: data,
    },
    revalidate: 1,
  };
}
