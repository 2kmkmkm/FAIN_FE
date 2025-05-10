import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import EmergencyModal from "./modals/EmergencyModal";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StreamingPage from "./pages/StreamingPage";
import EmergencyPage from "./pages/EmergencyPage";

export default function App() {
  const nav = useNavigate();

  const [isEmergency, setIsEmergency] = useState<boolean>(true);

  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/streaming" element={<StreamingPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
      </Routes>
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
    </>
  );
}
