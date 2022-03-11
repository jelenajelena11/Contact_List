import SearchIcon from "../icons/SearchIcon";
import { IconSpan, InputField, InputWrapper } from "./SearchInput.styled";

export default function SearchInput({ setSearchTerm }: any) {
  return (
    <InputWrapper>
      <InputField
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconSpan>
        <SearchIcon />
      </IconSpan>
    </InputWrapper>
  );
}
