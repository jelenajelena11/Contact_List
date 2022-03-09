import { useState } from "react";
import { Contact } from "../components/contacts/Contact";
import contacts from "../mock/db.json";

export function useData() {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("contactList")) {
      window.localStorage.setItem("contactList", JSON.stringify(contacts));
      return contacts;
    }
  }
  return contacts;
}

export function useTest(contacts: Contact[]) {
  const [newContacts, setNewContacts] = useState<Contact[]>([]);
  setNewContacts(contacts);
  return newContacts;
}
