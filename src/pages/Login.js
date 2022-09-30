import React from "react";
import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUsername, setnewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      <h2>this is login page {username}</h2>
      <input
        onChange={(e) => {
          setnewUsername(e.target.value);
        }}
        type="text"
        placeholder="enter name"
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        login
      </button>
      <button>logout</button>
    </div>
  );
};
