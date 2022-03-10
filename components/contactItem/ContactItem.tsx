import React from "react";
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
import useDialog from "../ui/dialog/useDialog";

export default function ContactItem({
  id,
  firstName,
  lastName,
  profilePhoto,
}: Contact) {
  const { isShowing, toggle } = useDialog();

  return (
    <>
      <ContactItemWrapper>
        <ContactIcons>
          <FavouriteButton />
          <ButtonDiv>
            <Link href={`/editContact/${id}`}>
              <DeleteSpan>
                <EditButton />
              </DeleteSpan>
            </Link>
            <DeleteSpan>
              <DeleteButton onClick={toggle} />
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
      <DeleteItemDialog contactId={id} isShowing={isShowing} onClose={toggle} />
    </>
  );
}
