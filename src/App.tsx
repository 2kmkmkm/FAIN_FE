import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/common/Navigation";
import EmergencyModal from "./modals/EmergencyModal";
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

export default function App() {
  const nav = useNavigate();

  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("스트리밍");

  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/streaming" element={<StreamingPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/analysis" element={<AnlaysisPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/history/detail/:reportId"
          element={<HistoryDetailPage />}
        />
        <Route path="/my" element={<MyPage />} />
        <Route path="/edit/guardian" element={<GuardianEditPage />} />
        <Route path="/edit/patient" element={<PatientEditPage />} />
      </Routes>
      <Navigation
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
    </>
  );
}
