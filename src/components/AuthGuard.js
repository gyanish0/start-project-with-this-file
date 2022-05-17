import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/User";

export default function AuthGuard(props) {
  const { children } = props;
  const auth = useContext(UserContext);
  if (!auth.userLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
