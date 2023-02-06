import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/context";
import Avatar from "../../assets/avatar.png";

export default function NavMini() {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const [dropdown, setDropdown] = useState(false);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="topMini">
      <div className="topLeft">
        {user ? (
          <>
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown ? (
              <div className="dropdown">
                <Link to="/settings">Setting</Link>
                <div onClick={handleLogout}>Logout</div>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <img
              className="topImg"
              src={Avatar}
              alt=""
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown ? (
              <div className="dropdown">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            ) : null}
          </>
        )}
      </div>
      <div className="topCenter">
        <div className="title">Retro Log</div>
      </div>
      <div className="topRight">
        <Link to="/write">
          <i className="topIcon fa-light fa-pen"></i>
        </Link>
      </div>
    </nav>
  );
}
