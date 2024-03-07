import { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedSite = ({ children }: { children: React.ReactNode }) => {
  const [loggedin, setLoggedin] = useState(false);
  if (!loggedin) {
    return <Navigate to="/login" />;
  }
  return children;
};
