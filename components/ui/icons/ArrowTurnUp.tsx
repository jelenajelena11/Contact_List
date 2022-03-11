import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ArrowTurnUp() {
  return (
    <FontAwesomeIcon
      icon={faArrowTurnUp}
      style={{
        width: "16px",
        height: "16px",
        transform: "rotateZ(-90deg)",
        color: "#c1c1c1",
        float: "left",
      }}
    />
  );
}
