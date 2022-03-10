import { ContactProps } from "../contacts/Contact";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddNumber from "../ui/icons/AddNumber";
import EmailIcon from "../ui/icons/EmailIcon";
import User from "../ui/icons/User";
import CloseCircle from "../ui/icons/CloseCircle";
import PhoneIcon from "../ui/icons/PhoneIcon";
import {
  ContactFormContainer,
  NewContactForm,
  BackBtn,
  FormLabel,
  ContactInputsWrapper,
  EmailText,
  NumberWrapper,
  NumberText,
  ButtonWrapper,
  BtnSave,
  BtnCancel,
  ImageEdit,
  ImgSpan,
} from "../../styles/common/commonAuth.styled";
import DeleteButton from "../ui/button/delete/DeleteButton";
import CloseIcon from "../ui/icons/CloseIcon";
import {
  FirstRowSpan,
  FirstRowRight,
  EditInput,
  EditContactInput,
} from "./EditContactItem.styled";
import DeleteItemDialog from "../ui/dialog/DeleteItemDialog";
import useDialog from "../ui/dialog/useDialog";

export default function EditContactItem({ contact }: ContactProps) {
  const handleChange = () => {};
  const { isShowing, toggle } = useDialog();

  return (
    <>
      <ContactFormContainer>
        <ImageEdit src={contact.profilePhoto} />
        <ImgSpan>
          <CloseIcon />
        </ImgSpan>
        <NewContactForm>
          <FirstRowSpan>
            <Link href="/">
              <BackBtn>
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
              </BackBtn>
            </Link>
            <FirstRowRight onClick={toggle}>
              Delete
              <DeleteButton />
            </FirstRowRight>
          </FirstRowSpan>
          <FormLabel>
            <User />
            <EmailText>full name</EmailText>
          </FormLabel>
          <EditInput
            readOnly
            type="text"
            name="fullName"
            onChange={handleChange}
            placeholder="Full name"
          />
          <FormLabel>
            <EmailIcon />
            <EmailText>email</EmailText>
          </FormLabel>
          <EditInput
            readOnly
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <FormLabel>
            <PhoneIcon />
            <EmailText>numbers</EmailText>
          </FormLabel>
          <ContactInputsWrapper>
            <EditContactInput
              readOnly
              type="text"
              name="number"
              onChange={handleChange}
              placeholder="Number"
            />
            <EditContactInput
              readOnly
              type="text"
              name="number"
              onChange={handleChange}
              placeholder="Cell"
            />
            <CloseCircle />
          </ContactInputsWrapper>
          <NumberWrapper>
            <AddNumber />
            <NumberText>Add number</NumberText>
          </NumberWrapper>
          <ButtonWrapper>
            <BtnCancel>
              <Link href="/">Cancel</Link>
            </BtnCancel>
            <BtnSave type="submit">Save</BtnSave>
          </ButtonWrapper>
        </NewContactForm>
      </ContactFormContainer>
      )
      <DeleteItemDialog
        contactId={contact.id}
        isShowing={isShowing}
        onClose={toggle}
      />
    </>
  );
}
