import { useRouter } from "next/router";
import React from "react";
import DeleteItemDialog from "../ui/dialog/DeleteItemDialog";
import { ContactItemWrapper, Item } from "./ContactItem.styled";

export default function ContactItem({ id, firstName, lastName, onClick }: any) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  function showDetails() {
    router.push("/" + id);
  }

  function deleteItem(event: any) {
    event.stopPropagation;
    setOpen(true);
  }
  return (
    <>
      {/* <ContactItemWrapper onClick={showDetails}> */}
      <ContactItemWrapper>
        <div style={{ width: "100%" }}>
          <div>favourite</div>
          <div>
            <button>edit</button>
            <button onClick={deleteItem}>delete</button>
          </div>
        </div>
        <img src="" alt="Img"></img>
        <Item>
          {firstName} {lastName}
        </Item>
      </ContactItemWrapper>
      {open && <DeleteItemDialog open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
