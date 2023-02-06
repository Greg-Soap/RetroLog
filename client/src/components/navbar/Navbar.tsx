import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/context";
import UseMediaQuery from "../mediaquery/UseMediaQuerry";
import NavMini from "../navMini/NavMini";
import "./Navbar.scss";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.PF;
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {isPageWide ? (
        <nav className="top">
          <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
          </div>
          <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              {/* <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li> */}
              {/* <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li> */}
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>
              <li className="topListItem" onClick={handleLogout}>
                {user && "LOGOUT"}
              </li>
            </ul>
          </div>
          <div className="topRight">
            {user ? (
              <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
            {/* <i className="topSearchIcon fas fa-search"></i> */}
          </div>
        </nav>
      ) : (
        <NavMini />
      )}
    </>
  );
};

export default Navbar;
