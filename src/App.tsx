import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { getHeaderConfig } from "./type/headerType";
import AppRoutes from "./AppRoutes";
import Header from "./components/common/Header";
import Navigation from "./components/common/Navigation";
import EmergencyModal from "./modals/EmergencyModal";

export default function App() {
  const nav = useNavigate();
  const loc = useLocation();

  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const showNavigation = ["/streaming", "/analysis", "/history", "/my"];

  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  const currentHeader = getHeaderConfig(loc.pathname);

  return (
    <div className="app-container">
      {currentHeader && (
        <Header title={currentHeader.title} isBack={currentHeader.isBack} />
      )}
      <main className={`main-content ${showNavigation ? "with-nav" : ""}`}>
        <AppRoutes />
      </main>

      {showNavigation && <Navigation currentPath={loc.pathname} />}
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
    </div>
  );
}
