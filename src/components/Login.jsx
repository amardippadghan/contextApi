import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/UserContext";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ userName, password });
  };
  return (
    <div>
      <h2>this is login page</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>submit </button>
    </div>
  );
}

export default Login;
