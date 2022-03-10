import Header from "../layout/header/Header";
import React from "react";
import {
  faArrowTurnUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContactDetailsContainer,
  DetailsContainer,
  InfoWrapper,
  LeftWrapper,
  NameHolder,
  Right,
  InfoLabel,
  PhoneList,
  LabelValue,
  EditBtn,
  ImageWrapper,
} from "./ContactDetails.styled";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import Link from "next/link";
import { Contact, Phone } from "../contacts/Contact";
import { BackButton } from "../../styles/common/commonAuth.styled";
import EmailIcon from "../ui/icons/EmailIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";

export default function ContactDetails({
  id,
  firstName,
  lastName,
  profilePhoto,
  email,
  phones,
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
                </BackButton>
              </Link>
              <NameHolder>
                {firstName} {lastName}
              </NameHolder>
            </LeftWrapper>
            <LeftWrapper>
              <FavouriteButton />
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
            <PhoneList>
              {phones.map((phone: Phone) => {
                <>
                  <p>phone</p>
                  <PhoneList>{phone.name}</PhoneList>
                </>;
              })}
            </PhoneList>
          </InfoWrapper>
        </Right>
      </ContactDetailsContainer>
      )
    </>
  );
}
