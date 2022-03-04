import { useRouter } from "next/router";
import React from "react";
import { ContactItemWrapper, Item } from "./ContactItem.styled";

export default function ContactItem({ id, firstName, lastName, onClick }: any) {
  const router = useRouter();

  function showDetails() {
    router.push("/" + id);
  }
  return (
    <>
      <ContactItemWrapper onClick={showDetails}>
        <Item>
          {firstName}, {lastName} {id}
        </Item>
      </ContactItemWrapper>
    </>
  );
}
