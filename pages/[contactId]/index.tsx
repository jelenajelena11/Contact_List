import ContactItem from '../../components/contactItem/ContactItem'

export default function ContactItemDetails() {
  return <ContactItem />
}

// export async function getStaticProps(){
//   // axios
//   // .get('http://localhost:8000/contacts')
//   // .then((resp) => setContacts(resp.data))
//   return {
//     props: {
//       contacts: contacts
//     },
//     revalidate: 10
//   }
// } 