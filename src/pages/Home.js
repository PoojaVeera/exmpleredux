import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return <div>This is home page{username}</div>;
};
