import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/User";

export default function AuthGuard(props) {
  const { children } = props;
  const auth = useGlobalContext();
  if (!auth.userLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
