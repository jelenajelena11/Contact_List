import contacts from "./db.json";

export function fetchData() {
  if (window.localStorage.getItem("contactList")) {
    return JSON.parse(localStorage.getItem("contactList") || "[]");
  }
  localStorage.setItem("contactList", JSON.stringify(contacts));
  return contacts;
}
