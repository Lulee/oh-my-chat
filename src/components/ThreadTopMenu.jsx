const ThreadTopMenu = () => (
  <header className="thread-top-menu">
    <form>
      <input type="text" maxLength={20} />
      <input type="submit" value="搜索对话" />
    </form>
    <button>新建对话</button>
  </header>
);

export default ThreadTopMenu;
