import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import EmergencyModal from "./modals/EmergencyModal";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StreamingPage from "./pages/StreamingPage";
import EmergencyPage from "./pages/EmergencyPage";
import AnlaysisPage from "./pages/AnalysisPage";
import HistoryPage from "./pages/HistoryPage";
import HistoryDetailPage from "./pages/HistoryDetailPage";

export default function App() {
  const nav = useNavigate();

  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/streaming" element={<StreamingPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/analysis" element={<AnlaysisPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/history/detail/:reportId"
          element={<HistoryDetailPage />}
        />
      </Routes>
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
    </>
  );
}
