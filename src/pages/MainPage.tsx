import { useNavigate } from "react-router-dom";
import logo_img from "../assets/logo_img.svg";
import logo_word from "../assets/logo_word.svg";
import { useAppSelector } from "../hooks/useRedux";
import { useEffect } from "react";

export default function MainPage() {
  const nav = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      nav("/streaming");
    } else {
      nav("/login");
    }
  }, [isAuthenticated, nav]);

  return (
    <div className="bg-back flex flex-col justify-center items-center min-h-screen">
      <img src={logo_img} className="w-52" />
      <img src={logo_word} className="w-32" />
    </div>
  );
}
