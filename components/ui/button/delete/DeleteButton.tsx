import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function DeleteButton({ onClick }: any) {
  return (
    <>
      <FontAwesomeIcon
        icon={faTrashCan}
        onClick={onClick}
        style={{ width: "14px", color: "#ccd1d0", marginLeft: "10px" }}
      />
    </>
  );
}
