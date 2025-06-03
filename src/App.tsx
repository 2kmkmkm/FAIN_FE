import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks/useRedux";
import { messaging } from "./utils/firebase";
import { onMessage } from "firebase/messaging";
import AppRoutes from "./AppRoutes";
import Navigation from "./components/common/Navigation";
import EmergencyModal from "./modals/EmergencyModal";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollToTop from "./components/common/ScrollTop";

export default function App() {
  const nav = useNavigate();
  const loc = useLocation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<{
    success: boolean;
    data: { reportId: number };
    message: string;
  } | null>(null);

  const showNavigationPaths = ["/streaming", "/analysis", "/history", "/my"];
  const shouldShowNavigation = showNavigationPaths.some((path) =>
    loc.pathname.startsWith(path)
  );

  const handleEmergency = () => {
    setIsEmergency(false);
    if (alertData?.data.reportId) {
      nav(`/emergency/${alertData.data.reportId}`);
    }
    setAlertData(null);
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker 등록 성공:", registration);
        })
        .catch((err) => {
          console.log("Service Worker 등록 실패:", err);
        });
    }
  }, []);

  useEffect(() => {
    onMessage(messaging, (payload) => {
      if (!payload) {
        console.error("알림 데이터 파싱 오류");
        return;
      }

      console.log("포그라운드 FCM 메시지 수신:", payload);
      console.log("payload.data", payload);

      setIsEmergency(true);

      console.log(isEmergency);
      console.log(alertData);
    });
  }, []);

  useEffect(() => {
    const isRootPath =
      location.pathname === "/" || location.pathname === "/index.html";

    if (isRootPath) {
      if (isAuthenticated) {
        nav("/streaming", { replace: true });
      } else {
        nav("/login", { replace: true });
      }
    }
  }, [isAuthenticated, nav]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      console.log("알림 권한이 없음. 권한 요청 필요.");
    } else {
      console.log("이미 알림 권한이 있음.");
    }
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
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
