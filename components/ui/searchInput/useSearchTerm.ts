import { Contact } from "../../contacts/Contact";

export const useFilterData = (contacts: Contact[], search: string) => {
  const res = contacts.filter((contact: Contact) => {
    if (search === "") {
      return contact;
    } else if (
      contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
    ) {
      return contact;
    }
  });
  return res;
};
