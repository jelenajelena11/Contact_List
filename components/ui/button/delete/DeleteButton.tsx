import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteButton() {
  return (
    <>
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ width: "14px", color: "#ccd1d0", marginLeft: "10px" }}
      />
    </>
  );
}
