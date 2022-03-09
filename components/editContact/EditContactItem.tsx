import { ContactProps } from "../contacts/Contact";
import Header from "../layout/header/Header";
import {
  ContactDetailsContainer,
  DetailsContainer,
  InfoWrapper,
  LeftWrapper,
  Right,
  InfoLabel,
  PhoneList,
  LabelValue,
} from "../contactItemDetails/ContactDetails.styled";
import EditButton from "../ui/button/edit/EditButton";
import FavouriteButton from "../ui/button/favourite/FavouriteButton";
import Link from "next/link";
import { Phone } from "../contacts/Contact";
import {
  faArrowTurnUp,
  faEnvelope,
  faPerson,
  faPhone,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackBtn } from "../newContact/NewContact.styled";
import DeleteButton from "../ui/button/delete/DeleteButton";

export default function EditContactItem({ contact }: ContactProps) {
  return (
    <>
      <Header />
      <ContactDetailsContainer>
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
      </ContactDetailsContainer>
      )
    </>
  );
}
