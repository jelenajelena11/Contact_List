import React from "react";
import DeleteItemDialog from "../ui/dialog/DeleteItemDialog";
import {
  ContactItemWrapper,
  Item,
  ContactIcons,
  ContactImage,
  DeleteSpan,
  LinkWrap,
  ButtonDiv,
} from "./ContactItem.styled";
import Link from "next/link";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import DeleteButton from "../ui/button/delete/DeleteButton";
import { Contact } from "../contacts/Contact";
import useDialog from "../ui/dialog/useDialog";

interface Props {
  contact: Contact;
  onFavoriteClick: (id: number) => void;
}

export default function ContactItem({ contact, onFavoriteClick }: Props) {
  const { isShowing, toggle } = useDialog();
  const { id, firstName, lastName, profilePhoto, favourite } = contact;
  return (
    <>
      <ContactItemWrapper>
        <ContactIcons>
          <FavouriteButton
            favourite={favourite}
            onClick={() => onFavoriteClick(id)}
          />
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
        <Link href={`/[id]`} as={`/${id}`}>
          <LinkWrap>
            <ContactImage src={profilePhoto} alt="Img" />
            <Item>
              {firstName} {lastName}
            </Item>
          </LinkWrap>
        </Link>
      </ContactItemWrapper>
      <DeleteItemDialog contactId={id} isShowing={isShowing} onClose={toggle} />
    </>
  );
}
