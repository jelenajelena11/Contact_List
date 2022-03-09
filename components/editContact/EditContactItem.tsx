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
  UploadDiv,
  NewContactForm,
  BackBtn,
  FormLabel,
  ContactInput,
  ContactInputsWrapper,
  EmailText,
  ContactInputNew,
  NumberWrapper,
  NumberText,
  ButtonWrapper,
  BtnSave,
  BtnCancel,
} from "../../styles/common/commonAuth.styled";
import DeleteButton from "../ui/button/delete/DeleteButton";

export default function EditContactItem({ contact }: ContactProps) {
  const handleChange = () => {};
  return (
    <>
      {/* <ContactDetailsContainer>
        <img
          src={contact.profilePhoto}
          style={{
            borderRadius: "50%",
            marginRight: "2%",
          }}
        />
        <Right>
          <DetailsContainer>
            <LeftWrapper>
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
            </LeftWrapper>
            <LeftWrapper>
              Delete
              <DeleteButton />
            </LeftWrapper>
          </DetailsContainer>

          <InfoWrapper>
            <InfoLabel>
              <FontAwesomeIcon
                icon={faPerson}
                style={{ width: "16px", height: "16px" }}
              />
              full name
            </InfoLabel>
            <input readOnly value={contact.firstName && contact.lastName} />
            <InfoLabel>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "16px", height: "16px" }}
              />
              email
            </InfoLabel>
            <input value={contact.email} />
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ width: "16px", height: "16px" }}
              />
              numbers
            </InfoLabel>
            <PhoneList>
              {contact.phones.map((phone: Phone) => {
                <PhoneList>{phone}</PhoneList>;
              })}
            </PhoneList>
          </InfoWrapper>
          <div>
            <FontAwesomeIcon icon={faPlus} />
            <p>add number</p>
          </div>
        </Right>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </ContactDetailsContainer> */}
      <ContactFormContainer>
        <UploadDiv>
          <img src={contact.profilePhoto}></img>
        </UploadDiv>
        <NewContactForm>
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
          Delete
          <DeleteButton />
          <FormLabel>
            <User />
            <EmailText>full name</EmailText>
          </FormLabel>
          <ContactInput
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
          <ContactInput
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
            <ContactInputNew
              readOnly
              type="text"
              name="number"
              onChange={handleChange}
              placeholder="Number"
            />
            <ContactInputNew
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
    </>
  );
}
