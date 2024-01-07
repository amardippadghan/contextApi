import React from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = React.useContext(userContext);
  console.log(user);
  return (
    <div>
      {!user ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Profile</h1>
          <h2>Name: {user.userName}</h2>
          <h2>Email: {user.password}</h2>
        </div>
      )}
    </div>
  );
}

export default Profile;
