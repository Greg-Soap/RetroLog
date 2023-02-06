import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/context";
import Avatar from "../../assets/avatar.png";
import "./navMini.scss";

export default function NavMini() {
  const PF = process.env.PF;
  const { user, dispatch } = useContext(Context);
  const [dropdown, setDropdown] = useState(false);
  const handleClose = () => {
    setDropdown(false);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setDropdown(false);
  };
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "topMini colorChange" : "topMini"}>
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
              <div className="topList">
                <Link
                  to="/settings"
                  className="topListItem"
                  onClick={handleClose}
                >
                  Setting
                </Link>
                <div onClick={handleLogout} className="topListItem">
                  Logout
                </div>
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
              <div className="topList">
                <Link to="/login" className="topListItem" onClick={handleClose}>
                  Login
                </Link>
                <Link
                  to="/register"
                  className="topListItem"
                  onClick={handleClose}
                >
                  Register
                </Link>
              </div>
            ) : null}
          </>
        )}
      </div>
      <div className="topCenter">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title">Retro Log</div>
        </Link>
      </div>
      <div className="topRight">
        <Link to="/write">
          <i className="topIcon fa fa-pen "></i>
        </Link>
      </div>
    </nav>
  );
}
