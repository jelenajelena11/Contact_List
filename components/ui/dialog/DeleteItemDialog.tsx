import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import {
  CancelButton,
  DeleteButton,
  DialogTitle,
} from "./DeleteItemDialog.styled";

export default function DeleteItemDialog({
  onClose,
  selectedValue,
  open,
}: any) {
  function deleteContact() {}
  return (
    <Dialog
      onClose={() => {}}
      open={open}
      PaperProps={{ sx: { width: "29%", height: "25vh", padding: "0 1em" } }}
    >
      <div>
        <p>Delete</p>
        <hr />
        <DialogTitle>are you sure you want to delete this contact?</DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={deleteContact}>Delete</DeleteButton>
        </div>
      </div>
    </Dialog>
  );
}
