import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputField, InputWrapper } from "./SearchInput.styled";

export default function SearchInput({ setSearchTerm }: any) {
  return (
    <InputWrapper>
      <InputField
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          width: "12px",
          height: "12px",
          color: "gray",
          position: "absolute",
          bottom: "47%",
          display: "block",
          left: "28%",
          color: "rgb(204, 209, 208)",
        }}
      />
    </InputWrapper>
  );
}
