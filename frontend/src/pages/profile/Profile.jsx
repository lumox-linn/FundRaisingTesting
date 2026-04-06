import { useEffect } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import "../profile/profile.css";
import Router from "../../router/Router";
import logo from "../../assets/logo.svg";
function Profile() {
  const location = useLocation();
  // const userdata = location.state.userdata;
  const userdata = location.state?.userdata;

  useEffect(() => {
    console.log(Router);
  });
  return (
    <div className="profile">
      <div className="usernav">
        <img src={logo} alt="" className="logo" />
        <ul className="userhead">
          <li>
            <img src={location.state.userRavatar} alt="" />
          </li>
          <li>{userdata?.username}</li>
        </ul>
        <ul className="userbody">
          <li>
            <Link to="personalInfo">Personal Info</Link>
          </li>
          <li>
            <Link to="myactivities">My Activities</Link>
          </li>
        </ul>
      </div>
      <div className="proshow">
        <Outlet />
      </div>
    </div>
  );
}
export default Profile;
