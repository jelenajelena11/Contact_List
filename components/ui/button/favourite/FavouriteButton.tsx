import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavouriteButton() {
  return (
    <>
      <FontAwesomeIcon
        icon={faHeart}
        style={{ width: "12px", height: "12px", color: "#ccd1d0" }}
      />
    </>
  );
}
