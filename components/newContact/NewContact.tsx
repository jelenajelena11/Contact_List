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
  UploadLabel,
} from "../../styles/common/commonAuth.styled";
import ArrowTurnUp from "../ui/icons/ArrowTurnUp";
import Upload from "../ui/icons/Upload";
import { Contact, ContactsList } from "../contacts/Contact";
import { SyntheticEvent, useState } from "react";

export default function NewContact() {
  const [user, setUser] = useState({
    id: 9,
    profilePhoto: "",
    favourite: false,
    firstName: "",
    lastName: "",
    email: "",
    phones: [{ name: "", label: "" }],
  } as Contact);

  const saveChanges = (e: SyntheticEvent<{}>) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contactList") || "[]");
    contacts.push(user);
    localStorage.setItem("contactList", JSON.stringify(contacts));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      const firstName = value.split(" ")[0];
      const lastName = value.split(" ")[1];
      setUser((user) => ({ ...user, firstName, lastName }));
      return;
    }
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handlePhoneNumberChange = (value: string, index: number) => {
    if (!value) {
      return;
    }
    const phones = [...user.phones];
    if (phones[index]) {
      phones[index].label = value;
    } else {
      phones.push({ name: value, label: "" });
    }
    setUser((user) => ({ ...user, phones }));
  };

  const handlePhoneNameChange = (value: string, index: number) => {
    if (!value) {
      return;
    }
    const phones = [...user.phones];
    if (phones[index]) {
      phones[index].name = value;
    } else {
      phones.push({ name: value, label: "" });
    }
    setUser((user) => ({ ...user, phones }));
  };

  return (
    <>
      <ContactFormContainer>
        <UploadDiv>
          <UploadLabel>
            <Upload />
          </UploadLabel>
        </UploadDiv>
        <NewContactForm>
          <Link href="/">
            <BackBtn>
              <ArrowTurnUp />
            </BackBtn>
          </Link>
          <FormLabel>
            <User />
            <EmailText>full name</EmailText>
          </FormLabel>
          <ContactInput
            type="text"
            name="fullName"
            onChange={handleChange}
            placeholder="Full name"
            value={user.firstName + " " + user.lastName}
          />
          <FormLabel>
            <EmailIcon />
            <EmailText>email</EmailText>
          </FormLabel>
          <ContactInput
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={user.email}
          />
          <FormLabel>
            <PhoneIcon />
            <EmailText>numbers</EmailText>
          </FormLabel>
          <ContactInputsWrapper>
            {user.phones.map((phone, i) => (
              <div key={i}>
                <ContactInputNew
                  type="text"
                  name="number"
                  onChange={(e) => handlePhoneNameChange(e.target.value, i)}
                  placeholder="Number"
                  value={phone.name}
                />
                <ContactInputNew
                  type="text"
                  name="number"
                  onChange={(e) => handlePhoneNumberChange(e.target.value, i)}
                  placeholder="Cell"
                  value={phone.label}
                />
              </div>
            ))}
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
            <BtnSave type="submit" onClick={(e) => saveChanges(e)}>
              Save
            </BtnSave>
          </ButtonWrapper>
        </NewContactForm>
      </ContactFormContainer>
    </>
  );
}
