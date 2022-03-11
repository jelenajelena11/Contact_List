import { Contact, ContactProps, Phone } from "../contacts/Contact";
import Link from "next/link";
import AddNumber from "../ui/icons/AddNumber";
import EmailIcon from "../ui/icons/EmailIcon";
import User from "../ui/icons/User";
import CloseCircle from "../ui/icons/CloseCircle";
import PhoneIcon from "../ui/icons/PhoneIcon";
import {
  ContactFormContainer,
  NewContactForm,
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
  BackButton,
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
import { SyntheticEvent, useEffect, useState } from "react";
import ArrowTurnUp from "../ui/icons/ArrowTurnUp";

export default function EditContactItem(props: ContactProps) {
  const { contact } = props;
  const [user, setUser] = useState({
    id: contact.id || 0,
    profilePhoto: contact.profilePhoto || "",
    favourite: contact.favourite || false,
    firstName: contact.firstName || "",
    lastName: contact.lastName || "",
    email: contact.email || "",
    phones: contact.phones || ([{ name: "", label: "" }] as Phone[]),
  } as Contact);

  useEffect(() => {
    setUser(contact);
  }, [props]);

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
  const { isShowing, toggle } = useDialog();

  const saveChanges = (e: SyntheticEvent<{}>) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contactList") || "");
    const currentContact = contacts.find((c: Contact) => c.id === user.id);
    Object.assign(currentContact, user);
    localStorage.setItem("contactList", JSON.stringify(contacts));
  };

  const onAddNumberClick = () => {
    const phones = [...user.phones];
    phones.push({ name: "", label: "" });
    setUser((user) => ({ ...user, phones }));
  };

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
              <BackButton>
                <ArrowTurnUp />
              </BackButton>
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
          <EditInput
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
            {user.phones &&
              user.phones.map((phone, i) => (
                <div key={i}>
                  <EditContactInput
                    type="text"
                    name="number"
                    onChange={(e) => handlePhoneNameChange(e.target.value, i)}
                    placeholder="Number"
                    value={phone.name}
                  />
                  <EditContactInput
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
          <NumberWrapper onClick={onAddNumberClick}>
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
      <DeleteItemDialog
        contactId={contact.id}
        isShowing={isShowing}
        onClose={toggle}
      />
    </>
  );
}
