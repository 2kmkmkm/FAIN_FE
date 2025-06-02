import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ title }: { title: string }) {
  const nav = useNavigate();

  return (
    <div className="sticky top-0 w-full z-10 py-3.5 px-5 bg-white flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
      <button
        type="button"
        className="flex w-5 justify-center items-center"
        onClick={() => nav(-1)}
      >
        <img src={back} className="w-2.5" />
      </button>
      <div className="heading-m text-center flex-1">{title}</div>
      <button
        type="button"
        className="invisible flex w-5 justify-center items-center"
      >
        <img src={back} className="w-2.5" />
      </button>
    </div>
  );
}
