import { useRouter } from "next/router";
import React from "react";
import DeleteItemDialog from "../ui/dialog/DeleteItemDialog";
import {
  ContactItemWrapper,
  Item,
  ContactIcons,
  ContactImage,
} from "./ContactItem.styled";
import { faHeart, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactItem({
  id,
  firstName,
  lastName,
  onClick,
  profilePhoto,
}: any) {
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
        <ContactIcons>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ width: "12px", height: "12px", color: "#ccd1d0" }}
          />
          <div>
            <span>
              <FontAwesomeIcon
                icon={faPen}
                style={{ width: "12px", height: "12px", color: "#ccd1d0" }}
              />
            </span>
            <span onClick={deleteItem}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ width: "12px", height: "12px", color: "#ccd1d0" }}
              />
            </span>
          </div>
        </ContactIcons>
        {/* <div> */}
        <ContactImage src={profilePhoto} alt="Img" />
        <Item>
          {firstName} {lastName}
        </Item>
        {/* </div> */}
      </ContactItemWrapper>
      {open && <DeleteItemDialog open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
