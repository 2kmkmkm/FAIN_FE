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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/streaming" element={<StreamingPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
      <Route path="/analysis" element={<AnlaysisPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/history/detail/:reportId" element={<HistoryDetailPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/edit/guardian" element={<GuardianEditPage />} />
      <Route path="/edit/patient" element={<PatientEditPage />} />
    </Routes>
  );
}
