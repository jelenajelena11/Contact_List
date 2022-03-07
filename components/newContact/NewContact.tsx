import { Formik } from "formik";
import { useRouter } from "next/router";
import {
  ContactFormContainer,
  ContactInput,
  NewContactForm,
  ButtonWrapper,
  BtnSave,
  BtnCancel,
  UploadDiv,
  BackBtn,
} from "./NewContact.styled";
import {
  faArrowTurnUp,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewContact() {
  const router = useRouter();
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
              <BackBtn onClick={() => router.push("/")}>
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
              <label style={{ borderTop: "1px solid gray" }}>Full name</label>
              <ContactInput
                type="text"
                value={values.firstName}
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
              />
              <hr />
              <label>Lastname</label>
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
