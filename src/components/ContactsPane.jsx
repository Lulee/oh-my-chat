import ContactList from "./ContactList";
import ContactTopMenu from "./ContactTopMenu";

const ContactsPane = ({ selectedContactId, onSelectContact }) => {
  return (
    <>
      <ContactTopMenu />
      <ContactList
        selectedContactId={selectedContactId}
        onSelectContact={onSelectContact}
      />
    </>
  );
};

export default ContactsPane;
