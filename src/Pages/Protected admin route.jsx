// src/Components/ProtectedAdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";

export default function ProtectedAdminRoute() {
  const { user } = useContext(AuthContext);

  /* if (!user) {
    return <Navigate to="/Log in" />;
  } */
  console.log(user);

  /* if (!currentUser.isAdmin) {
    return <Navigate to="/unauthorized" />; // Create a 403 page if needed
  } */

  return <Outlet />;
}
