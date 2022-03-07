import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";

export default function DeleteItemDialog({
  onClose,
  selectedValue,
  open,
}: any) {
  return (
    <Dialog onClose={() => {}} open={open}>
      <p>Delete</p>
      <hr />
      <DialogTitle>are you sure you want to delete this contact?</DialogTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "36vh",
          padding: "2em",
        }}
      >
        <Button onClick={onClose}>Cancel</Button>
        <Button>Delete</Button>
      </div>
    </Dialog>
  );
}
