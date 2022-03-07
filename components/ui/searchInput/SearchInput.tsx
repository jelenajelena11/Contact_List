import { InputField, InputWrapper } from "./SearchInput.styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput() {
  return (
    <InputWrapper>
      <InputField></InputField>
      {/* <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ width: "12px", height: "12px", position: "absolute" }}
      /> */}
    </InputWrapper>
  );
}
