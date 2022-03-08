import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditButton() {
  return (
    <>
      <FontAwesomeIcon
        icon={faPen}
        style={{ width: "12px", height: "12px", color: "#ccd1d0" }}
      />
    </>
  );
}
