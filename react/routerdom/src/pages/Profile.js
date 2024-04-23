import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile = (props) => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Profile page and username is {username}</h1>
      <ChangeProfile />
    </div>
  );
};
