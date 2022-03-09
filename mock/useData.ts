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
