import React, { useState } from "react";
import DeleteItemDialog from "../ui/dialog/DeleteItemDialog";
import {
  ContactItemWrapper,
  Item,
  ContactIcons,
  ContactImage,
  DeleteSpan,
  ButtonDiv,
} from "./ContactItem.styled";
import Link from "next/link";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import DeleteButton from "../ui/button/delete/DeleteButton";
import { Contact } from "../contacts/Contact";

export default function ContactItem({
  id,
  firstName,
  lastName,
  profilePhoto,
}: Contact) {
  const [open, setOpen] = React.useState(false);
  const [inEditMode, setInEditMode] = useState(false);

  return (
    <>
      <ContactItemWrapper>
        <ContactIcons>
          <FavouriteButton />
          <ButtonDiv>
            <Link href={`/editContact/${id}`}>
              <DeleteSpan onClick={() => setInEditMode(true)}>
                <EditButton />
              </DeleteSpan>
            </Link>
            <DeleteSpan onClick={() => setOpen(true)}>
              <DeleteButton />
            </DeleteSpan>
          </ButtonDiv>
        </ContactIcons>
        <ContactImage src={profilePhoto} alt="Img" />
        <Link href={`/[id]`} as={`/${id}`}>
          <Item>
            {firstName} {lastName}
          </Item>
        </Link>
      </ContactItemWrapper>
      {open && (
        <DeleteItemDialog
          contactId={id}
          open={open}
          setOpen={setOpen}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
