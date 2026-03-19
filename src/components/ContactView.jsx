import { useState } from "react";
import ContactDetailPane from "./ContactDetailPane";
import ContactsPane from "./ContactsPane";

const ContactView = () => {
  const [selectedContactId, setSelectedContactId] = useState(3);

  return (
    <>
      <aside>
        <ContactsPane
          selectedContactId={selectedContactId}
          onSelectContact={setSelectedContactId}
        />
      </aside>
      <main>
        <ContactDetailPane contactId={selectedContactId} />
      </main>
    </>
  );
};

export default ContactView;
