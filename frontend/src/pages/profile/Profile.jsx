import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const userdata = location.state.userdata;
  return <div></div>;
}
export default Profile;
