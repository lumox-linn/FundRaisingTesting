import "../profiebar/profilebar.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
function ProfileBar({ user, userRavatar }) {
  console.log(user, userRavatar);
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="ProfileBar">
      <img src={arrow} alt="" className="arrow" />
      <div className="userinfo">
        <li>
          {/* <img src="" alt="" /> */}
          {user.username}
        </li>
        <li className="email">{user.email}</li>
      </div>
      <ul>
        <li
          onClick={() =>
            navigate(`/profile/${user.userid}`, {
              state: { userdata: user, userRavatar: userRavatar },
            })
          }
        >
          Profile
        </li>
        <li>history</li>
        <li
          onClick={() => {
            localStorage.removeItem("userData");
            window.dispatchEvent(new Event("storage"));
            navigate("/home");
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
export default ProfileBar;
