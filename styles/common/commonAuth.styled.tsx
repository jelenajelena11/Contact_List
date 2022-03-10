import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const Wrapper = styled.div``;

export const BackButton = styled.span`
  border-bottom: 1px solid ${theme.colors.gray};
  background-color: transparent;
  border: none;
  width: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContactFormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3em 0;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const UploadDiv = styled.div`
  background-color: ${theme.colors.lightBlue};
  padding: 5em;
  border-radius: 50%;
  align-self: baseline;
  margin-right: 2%;

  > input {
    display: none;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const NewContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;

  @media (max-width: 425px) {
    width: 70vw;
  }
`;

export const BackBtn = styled(BackButton)`
  padding-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 1em 0;
  color: ${theme.colors.blue};
  border-top: 1.5px solid ${theme.colors.lightBlue};
`;

export const EmailText = styled.p`
  margin-left: 10px;
`;

export const ContactInput = styled.input`
  padding: 1.5em;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 5px;
  margin-bottom: 2em;
  width: 45%;

  ::placeholder {
    color: ${theme.colors.lightGray};
  }
`;

export const ContactInputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0;
    align-items: flex-start;
  }
`;

export const ContactInputNew = styled.input`
  padding: 1.5em;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 5px;
  width: 45%;

  ::placeholder {
    color: ${theme.colors.lightGray};
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2.5em;
  color: ${theme.colors.blue};
`;

export const NumberText = styled.p`
  margin-left: 5px;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5em;
  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
  }
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

  @media (max-width: 425px) {
    margin-top: 0.7em;
  }
`;

export const BtnCancel = styled(Btn)`
  background-color: ${theme.colors.lighterGray};
`;

export const ImageEdit = styled.img`
  padding: 0 3em;
  border-radius: 50%;
  align-self: baseline;
  position: relative;
  filter: contrast(20%);
`;

export const ImgSpan = styled.span`
  display: block;
  position: absolute;
  color: ${theme.colors.white};
  left: 29.3%;
  bottom: 76.6%;
`;
