import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  ButtonDialogWrapper,
  CancelButton,
  DeleteButton,
  DialogTitle,
  DialogWrapper,
  TextDialog,
} from "./DeleteItemDialog.styled";

export default function DeleteItemDialog({
  onClose,
  contactId,
  setOpen,
  isShowing,
}: any) {
  function deleteContact(contactId: number) {
    const list = JSON.parse(localStorage.getItem("contactList") || "");
    const newList = list.filter((item: any) => item.id !== contactId);
    localStorage.setItem("contactList", JSON.stringify(newList));
    window.location.reload();
    onClose(false);
  }
  return (
    <Dialog
      onClose={() => {}}
      open={isShowing}
      PaperProps={{ sx: { width: "44vw" } }}
    >
      <DialogWrapper>
        <TextDialog>Delete</TextDialog>
        <DialogTitle>Are you sure you want to delete this contact?</DialogTitle>
        <ButtonDialogWrapper>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={() => deleteContact(contactId)}>
            Delete
          </DeleteButton>
        </ButtonDialogWrapper>
      </DialogWrapper>
    </Dialog>
  );
}
