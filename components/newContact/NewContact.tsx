import { Formik } from "formik";
import {
  ContactFormContainer,
  ContactInput,
  NewContactForm,
  ButtonWrapper,
  BtnSave,
  BtnCancel,
  UploadDiv,
  BackBtn,
  FormLabel,
} from "./NewContact.styled";
import {
  faArrowTurnUp,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                style={{ width: "16px", height: "16px", color: "white" }}
              />
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
              <FormLabel>Full name</FormLabel>
              <ContactInput
                type="text"
                value={values.firstName}
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
              />
              <hr />
              <FormLabel>Lastname</FormLabel>
              <ContactInput
                type="text"
                value={values.lastName}
                onChange={handleChange}
                name="lastname"
                placeholder="Last name"
              />
              <ContactInput
                type="profile photo"
                value={values.profilePhoto}
                name="profile photo"
                onChange={handleChange}
                placeholder="Profile photo"
              />
              <ContactInput
                type="text"
                value={values.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
              <ButtonWrapper>
                <BtnCancel>Cancel</BtnCancel>
                <BtnSave type="submit">Save</BtnSave>
              </ButtonWrapper>
            </NewContactForm>
          </ContactFormContainer>
        )}
      </Formik>
    </>
  );
}
