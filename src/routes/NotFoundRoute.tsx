import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundRoute() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col gap-10 text-center justify-center items-center min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="text-main text-4xl font-extrabold">NOT FOUND</div>
        <div className="text-2xl font-medium text-darkgray">
          페이지를 찾을 수 없습니다
        </div>
      </div>
      <div className="px-28">
        <Button label="홈으로" onClick={() => nav("/streaming")} />
      </div>
    </div>
  );
}
