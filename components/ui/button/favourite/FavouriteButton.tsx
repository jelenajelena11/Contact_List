import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../../../../mock/fetchData";

export default function FavouriteButton({
  favourite,
  onClick = () => {},
}: any) {
  return (
    <>
      {favourite ? (
        <FontAwesomeIcon
          onClick={onClick}
          icon={faHeart}
          style={{ width: "18px", color: "#ccd1d0" }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={onClick}
          icon={farHeart}
          style={{ width: "18px", color: "#ccd1d0" }}
        />
      )}
    </>
  );
}
