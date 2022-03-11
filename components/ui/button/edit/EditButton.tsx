import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditButton() {
  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ width: "16px", color: "#ccd1d0" }}
      />
    </>
  );
}
