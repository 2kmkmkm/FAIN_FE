import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Navigation from "./components/common/Navigation";
import EmergencyModal from "./modals/EmergencyModal";

export default function App() {
  const nav = useNavigate();
  const loc = useLocation();

  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("스트리밍");

  const showNavigationPaths = ["/streaming", "/analysis", "/history", "/my"];

  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  return (
    <>
      <AppRoutes />
      {showNavigationPaths.some((path) => loc.pathname.startsWith(path)) && (
        <Navigation
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      )}
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
    </>
  );
}
