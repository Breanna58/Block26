import ContactList from "./components/ContactList";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(dummyContacts)

  console.log("Contacts: ", contacts)




  return (

    <>
      <ContactList />
    </>
  );
}

