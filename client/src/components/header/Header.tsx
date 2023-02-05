import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Retro</span>
        <span className="headerTitleLg">LOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1582923450333-0ed45501c741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
