import Header from "../layout/header/Header";
import React from "react";
import { BackBtn } from "../newContact/NewContact.styled";
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
} from "./ContactDetails.styled";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import Link from "next/link";
import { Contact, Phone } from "../contacts/Contact";

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
      <Header />
      <ContactDetailsContainer>
        <img
          src={profilePhoto}
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
              <NameHolder>
                {firstName} {lastName}
              </NameHolder>
            </LeftWrapper>
            <LeftWrapper>
              <FavouriteButton />
              <EditButton />
            </LeftWrapper>
          </DetailsContainer>

          <InfoWrapper>
            <InfoLabel>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: "16px", height: "16px" }}
              />
              email
            </InfoLabel>
            <LabelValue>{email}</LabelValue>
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
              {phones.map((phone: Phone) => {
                <PhoneList>{phone}</PhoneList>;
              })}
            </PhoneList>
          </InfoWrapper>
        </Right>
      </ContactDetailsContainer>
      )
    </>
  );
}
