import reactLogo from "../assets/react.svg";

const ContactList = ({ selectedContactId, onSelectContact }) => {
  const contacts = [
    {
      id: 1,
      name: "小帅",
      phone: "13800000001",
    },
    {
      id: 2,
      name: "小白",
      phone: "13800000002",
    },
    {
      id: 3,
      name: "小美",
      phone: "13800000003",
    },
    {
      id: 4,
      name: "大壮",
      phone: "13800000004",
    },
    {
      id: 5,
      name: "老宋",
      phone: "13800000005",
    },
  ];
  return (
    <ul className="contacts-list">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className={selectedContactId === contact.id ? "active" : ""}
        >
          <a href="#" onClick={() => onSelectContact(contact.id)}>
            <img src={reactLogo} className="avatar" alt="头像" />
            <div className="contact-info">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-phone">{contact.phone}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;