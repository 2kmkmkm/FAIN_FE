import type { ReactNode } from "react";
import { useAppSelector } from "../hooks/useRedux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/streaming" replace /> : children;
}
