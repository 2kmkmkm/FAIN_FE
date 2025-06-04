import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StreamingPage from "./pages/StreamingPage";
import EmergencyPage from "./pages/EmergencyPage";
import AnlaysisPage from "./pages/AnalysisPage";
import HistoryPage from "./pages/HistoryPage";
import HistoryDetailPage from "./pages/HistoryDetailPage";
import MyPage from "./pages/MyPage";
import PatientEditPage from "./pages/PatientEditPage";
import GuardianEditPage from "./pages/GuardianEditPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import NotFoundRoute from "./routes/NotFoundRoute";
import ErrorRoute from "./routes/ErrorRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <MainPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />
      <Route
        path="/streaming"
        element={
          <PrivateRoute>
            <StreamingPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/emergency/:reportId"
        element={
          <PrivateRoute>
            <EmergencyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/analysis"
        element={
          <PrivateRoute>
            <AnlaysisPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/history/detail/:reportId"
        element={
          <PrivateRoute>
            <HistoryDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my"
        element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/guardian"
        element={
          <PrivateRoute>
            <GuardianEditPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/patient"
        element={
          <PrivateRoute>
            <PatientEditPage />
          </PrivateRoute>
        }
      />
      <Route path="/error" element={<ErrorRoute />} />
      <Route path="*" element={<NotFoundRoute />} />
    </Routes>
  );
}
