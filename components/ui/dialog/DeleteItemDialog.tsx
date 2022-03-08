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
  selectedValue,
  open,
  contactId,
}: any) {
  function deleteContact() {}
  return (
    <Dialog
      onClose={() => {}}
      open={open}
      PaperProps={{ sx: { width: "29%", height: "25vh", padding: "0 1em" } }}
    >
      <DialogWrapper>
        <TextDialog>Delete</TextDialog>
        <DialogTitle>are you sure you want to delete this contact?</DialogTitle>
        <ButtonDialogWrapper>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={deleteContact}>Delete</DeleteButton>
        </ButtonDialogWrapper>
      </DialogWrapper>
    </Dialog>
  );
}
