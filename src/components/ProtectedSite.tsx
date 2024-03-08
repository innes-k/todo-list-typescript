import { Navigate } from "react-router-dom";

export const ProtectedSite = ({ children }: { children: React.ReactNode }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
