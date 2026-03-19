const ContactTopMenu = () => (
  <header className="contacts-top-menu">
    <form>
      <input type="text" maxLength={20} placeholder="搜索联系人" />
      <input type="submit" value="搜索" />
    </form>
    <button>新建联系人</button>
  </header>
);

export  default ContactTopMenu;