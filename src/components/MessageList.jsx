import reactLogo from "../assets/react.svg";

const MessageList = () => {
  return (
    <ul className="message-list">
      <li className="from-me">
        <img src={reactLogo} alt="头像" className="avatar" />
        <p className="message">你好React!</p>
      </li>
      <li>
        <img src={reactLogo} className="avatar" alt="头像" />
        <p className="message">你好React！</p>
      </li>
      <li className="from-me">
        <img src={reactLogo} alt="头像" className="avatar" />
        <p className="message">
          欢迎学习React Web应用开发，你现在看到的是本书的聊天应用。
        </p>
      </li>
      <li>
        <img src={reactLogo} className="avatar" alt="头像" />
        <p className="message">这款应用有名字吗？</p>
      </li>
      <li className="from-me">
        <img src={reactLogo} alt="头像" className="avatar" />
        <p className="message">有的，就叫《我聊》。</p>
      </li>
      <li>
        <img src={reactLogo} className="avatar" alt="头像" />
        <p className="message">好的，我知道了。</p>
      </li>
    </ul>
  );
};

export default MessageList;
