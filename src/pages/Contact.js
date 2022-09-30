import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Contact = () => {
  const username = useSelector((state) => state.user.value.username);

  return <div>this is Contact{username}</div>;
};
