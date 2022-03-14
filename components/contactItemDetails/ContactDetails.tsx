import React from "react";
import {
  ContactDetailsContainer,
  DetailsContainer,
  InfoWrapper,
  LeftWrapper,
  NameHolder,
  Right,
  InfoLabel,
  LabelValue,
  EditBtn,
  ImageWrapper,
  LabelValueWrapper,
  Helper,
} from "./ContactDetails.styled";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import Link from "next/link";
import { Contact, Phone } from "../contacts/Contact";
import { BackButton } from "../../styles/common/commonAuth.styled";
import EmailIcon from "../ui/icons/EmailIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";
import ArrowTurnUp from "../ui/icons/ArrowTurnUp";

export default function ContactDetails({
  id,
  firstName,
  lastName,
  profilePhoto,
  email,
  phones,
  favourite,
}: Contact) {
  return (
    <>
      <ContactDetailsContainer>
        <ImageWrapper src={profilePhoto} />
        <Right>
          <DetailsContainer>
            <LeftWrapper>
              <Link href="/">
                <BackButton>
                  <ArrowTurnUp />
                </BackButton>
              </Link>
              <NameHolder>
                {firstName} {lastName}
              </NameHolder>
            </LeftWrapper>
            <LeftWrapper>
              <FavouriteButton favourite={favourite} />
              <Link href={`/editContact/${id}`}>
                <EditBtn>
                  <EditButton />
                </EditBtn>
              </Link>
            </LeftWrapper>
          </DetailsContainer>

          <InfoWrapper>
            <InfoLabel>
              <EmailIcon />
              email
            </InfoLabel>
            <LabelValue>{email}</LabelValue>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>
              <PhoneIcon />
              numbers
            </InfoLabel>
            <Helper>
              {phones.map((phone: Phone, i) => (
                <LabelValueWrapper key={i}>
                  <LabelValue>{phone.name}</LabelValue>
                  <LabelValue>{phone.label}</LabelValue>
                </LabelValueWrapper>
              ))}
            </Helper>
          </InfoWrapper>
        </Right>
      </ContactDetailsContainer>
    </>
  );
}
