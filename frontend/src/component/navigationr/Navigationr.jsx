import { useEffect } from "react";
// import Router from "../../router/Router";
import avatar from "../../assets/Avatar.svg";
import "./Navigationr.css";
function Navigationr({ Router = [], className, user }) {
  // useEffect(() => {
  //   console.log(props);
  // });
  console.log(user);
  return (
    <div className={`navr ${className || ""}`}>
      <ul>
        {Router.filter((item) => item.nav?.title).map((item, idx) => (
          <li key={idx}>
            <a href={item.path}>{item.nav.title}</a>
          </li>
        ))}
        <li className="user">
          {/* {
            user.avatar?user.avatar:<img src= alt="" className="avatar" />
          } */}
          <img src={avatar} alt="" className="avatar" />
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
}
export default Navigationr;
