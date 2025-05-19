import logo_img from "../assets/logo_img.svg";
import logo_word from "../assets/logo_word.svg";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={logo_img} className="w-52" />
      <img src={logo_word} className="w-32" />
    </div>
  );
}
