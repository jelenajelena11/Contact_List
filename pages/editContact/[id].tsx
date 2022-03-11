import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Phone } from "../../components/contacts/Contact";
import EditContactItem from "../../components/editContact/EditContactItem";
import { fetchData } from "../../mock/fetchData";

export default function EditContact() {
  const [passedContact, setPassedContact] = useState({
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
    setPassedContact(foundContact);
  }, [router]);
  return (
    <>
      <Head>
        <title>Edit</title>
        <meta name="description" content="Browse a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditContactItem contact={passedContact} />
    </>
  );
}
