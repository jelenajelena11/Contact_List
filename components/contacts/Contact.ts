export interface ContactsList {
  contacts: Contact[];
  onDataUpdated: () => void;
}

export interface ListOfFavourites {
  favourites: Contact[];
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  profilePhoto: string;
  email: string;
  favourite: boolean;
  phones: Phone[];
}

export interface ContactProps {
  contact: Contact;
}

export interface Phone {
  name: string;
  label: string;
}
