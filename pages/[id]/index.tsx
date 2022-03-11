import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ContactDetails from "../../components/contactItemDetails/ContactDetails";
import { Phone } from "../../components/contacts/Contact";
import contacts from "../../mock/db.json";
import { fetchData } from "../../mock/fetchData";

export default function ContactItemDetails() {
  const [contact, setContact] = useState({
    id: 0,
    profilePhoto: "",
    favourite: false,
    firstName: "",
    lastName: "",
    email: "",
    phones: [{ name: "", label: "" }] as Phone[],
  });
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const contacts = fetchData();
    const foundContact = contacts.find((c: any) => c.id == id);
    if (!foundContact) {
      return;
    }
    setContact(foundContact);
  }, [router]);

  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactDetails
        id={contact.id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        profilePhoto={contact.profilePhoto}
        email={contact.email}
        favourite={contact.favourite}
        phones={contact.phones}
        onFavoriteClick={() => {}}
      />
    </>
  );
}
