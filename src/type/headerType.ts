import { matchPath } from "react-router-dom";

const headerConfig = [
  { path: "/signup", title: "회원가입", isBack: true },
  { path: "/streaming", title: "스트리밍", isBack: false },
  { path: "/emergency", title: "낙상 감지", isBack: true },
  { path: "/analysis", title: "월별 분석", isBack: false },
  { path: "/history", title: "히스토리", isBack: false },
  { path: "/history/detail/:reportId", title: "히스토리", isBack: true },
  { path: "/my", title: "마이페이지", isBack: false },
  { path: "/edit/guardian", title: "보호자 정보 수정", isBack: true },
  { path: "/edit/patient", title: "환자 정보 수정", isBack: true },
];

export function getHeaderConfig(pathname: string) {
  for (const config of headerConfig) {
    if (matchPath({ path: config.path, end: true }, pathname)) {
      return config;
    }
  }
  return null;
}