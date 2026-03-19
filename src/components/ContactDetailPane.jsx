import menuIcon from "../assets/icon-menu.svg";
import reactLogo from "../assets/react.svg";

const ContactDetailPane = ({ contactId }) => {
  const contacts = [
    {
      id: 1,
      name: "小帅",
      phone: "13800000001",
      email: "xiaoshuai@example.com",
    },
    {
      id: 2,
      name: "小白",
      phone: "13800000002",
      email: "xiaobai@example.com",
    },
    {
      id: 3,
      name: "小美",
      phone: "13800000003",
      email: "xiaomei@example.com",
    },
    {
      id: 4,
      name: "大壮",
      phone: "13800000004",
      email: "dazhuang@example.com",
    },
    {
      id: 5,
      name: "老宋",
      phone: "13800000005",
      email: "laosong@example.com",
    },
  ];

  const contact = contacts.find((c) => c.id === contactId);

  if (!contact) {
    return (
      <div className="contact-detail">
        <p className="empty-state">请选择一个联系人</p>
      </div>
    );
  }

  return (
    <div className="contact-detail">
      <header className="contact-detail-header">
        <img src={reactLogo} className="avatar" alt="头像" />
        <h1>{contact.name}</h1>
        <button>
          <img src={menuIcon} alt="菜单" />
        </button>
      </header>
      <div className="contact-detail-content">
        <div className="detail-item">
          <span className="label">电话</span>
          <span className="value">{contact.phone}</span>
        </div>
        <div className="detail-item">
          <span className="label">邮箱</span>
          <span className="value">{contact.email}</span>
        </div>
      </div>
      <div className="contact-actions">
        <button className="action-button">发送消息</button>
        <button className="action-button">编辑</button>
        <button className="action-button delete">删除</button>
      </div>
    </div>
  );
};

export default ContactDetailPane;
