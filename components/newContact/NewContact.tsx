import { Formik } from "formik";
import {
  faArrowTurnUp,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddNumber from "../ui/icons/AddNumber";
import EmailIcon from "../ui/icons/EmailIcon";
import User from "../ui/icons/User";
import CloseCircle from "../ui/icons/CloseCircle";
import PhoneIcon from "../ui/icons/PhoneIcon";
import {
  ContactFormContainer,
  UploadDiv,
  NewContactForm,
  BackBtn,
  FormLabel,
  ContactInputsWrapper,
  EmailText,
  ContactInputNew,
  ContactInput,
  NumberWrapper,
  NumberText,
  ButtonWrapper,
  BtnSave,
  BtnCancel,
} from "../../styles/common/commonAuth.styled";

export default function NewContact() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          profilePhoto: "",
          email: "",
          favourite: "",
          phones: [],
        }}
        onSubmit={() => {}}
      >
        {({ handleSubmit, values, handleChange, errors, touched }) => (
          <ContactFormContainer>
            <UploadDiv>
              {/* <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                style={{ width: "16px", height: "16px", color: "white" }}
              /> */}
              <label htmlFor="file-input">
                <FontAwesomeIcon
                  icon={faArrowUpFromBracket}
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </label>
              <input type="file" />
            </UploadDiv>
            <NewContactForm onSubmit={handleSubmit}>
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
              <FormLabel>
                <User />
                <EmailText>full name</EmailText>
              </FormLabel>
              <ContactInput
                type="text"
                value={values.firstName}
                name="fullName"
                onChange={handleChange}
                placeholder="Full name"
              />
              <FormLabel>
                <EmailIcon />
                <EmailText>email</EmailText>
              </FormLabel>
              <ContactInput
                type="text"
                value={values.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
              <FormLabel>
                <PhoneIcon />
                <EmailText>numbers</EmailText>
              </FormLabel>
              <ContactInputsWrapper>
                <ContactInputNew
                  type="text"
                  value={values.phones}
                  name="number"
                  onChange={handleChange}
                  placeholder="Number"
                />
                <ContactInputNew
                  type="text"
                  value={values.phones}
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
        )}
      </Formik>
    </>
  );
}
