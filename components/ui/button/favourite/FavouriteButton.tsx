import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../../../mock/useData";

export default function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);
  const f = useData();

  useEffect(() => {
    f.map((fn) => {
      if (fn.favourite === true) {
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    });
  }, []);

  return (
    <>
      {isFavourite ? (
        <FontAwesomeIcon
          icon={faHeart}
          style={{ width: "18px", color: "#ccd1d0" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={farHeart}
          style={{ width: "18px", color: "#ccd1d0" }}
        />
      )}
    </>
  );
}
