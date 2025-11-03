import { useParams, Link } from "react-router";
import { useState } from "react";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
  const { name } = useParams();
  const [profile, setProfile] = useState("");

  const handleChange = (e) => {
    const newName = e.target.value.toLowerCase();
    setProfile(newName);
  };

  const url = profile ? "/profile/" + profile : "/profile";
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>Which profile would you like to see?</p>
      <label htmlFor="profile-name">Profile Name: </label>
      <input type="text" id="profile-name" onChange={handleChange}></input>
      <button>
        <Link to={url}>Load profile</Link>
      </button>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
