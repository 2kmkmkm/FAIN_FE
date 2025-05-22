import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { getHeaderConfig } from "./type/headerType";
import AppRoutes from "./AppRoutes";
import Header from "./components/common/Header";
import Navigation from "./components/common/Navigation";
import EmergencyModal from "./modals/EmergencyModal";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollToTop from "./components/common/ScrollTop";

export default function App() {
  const nav = useNavigate();
  const loc = useLocation();

  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const showNavigationPaths = ["/streaming", "/analysis", "/history", "/my"];
  const shouldShowNavigation = showNavigationPaths.some((path) =>
    loc.pathname.startsWith(path)
  );
  const handleEmergency = () => {
    setIsEmergency(false);
    nav("/emergency");
  };

  const currentHeader = getHeaderConfig(loc.pathname);

  return (
    <div className="app-container">
      <ScrollToTop />
      {currentHeader && (
        <Header title={currentHeader.title} isBack={currentHeader.isBack} />
      )}
      <main
        className={`main-content ${shouldShowNavigation ? "with-nav" : ""}`}
      >
        <AppRoutes />
      </main>

      {shouldShowNavigation && <Navigation currentPath={loc.pathname} />}
      {isEmergency && <EmergencyModal onClick={handleEmergency} />}
      <LoadingScreen />
    </div>
  );
}
