import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const ContactFormContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3em;
`;

export const NewContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 33vw;
`;

export const ContactInput = styled.input`
  padding: 1em;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 5px;
  margin-bottom: 2em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  padding: 0.7em 4.5em;
  border: 1px solid transparent;
  background-color: ${theme.colors.green};
  border-radius: 40px;
  color: white;
`;

export const BtnSave = styled(Btn)`
  background-color: ${theme.colors.blue};
`;

export const BtnCancel = styled(Btn)`
  background-color: ${theme.colors.lighterGray};
`;

export const UploadDiv = styled.span`
  background-color: ${theme.colors.lightBlue};
  padding: 5em;
  border-radius: 50%;
  align-self: baseline;
  margin-right: 2%;
`;

export const BackBtn = styled.span`
  border-bottom: 1px solid ${theme.colors.gray};
  background-color: transparent;
  border: none;
  width: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const FormLabel = styled.label`
  border-top: "1px solid ${theme.colors.gray}";
`;
