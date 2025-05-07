import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

type TitleProps = {
  title: string;
};

export default function Header({ title }: TitleProps) {
  const nav = useNavigate();

  return (
    <div className="w-full h-20 px-5 bg-white flex justify-between items-center shadow-[0px_2px_50px_0px_rgba(0,0,0,0.05)">
      <button
        type="button"
        className="flex w-5 justify-center items-center"
        onClick={() => nav(-1)}
      >
        <img src={back} className="w-2.5" />
      </button>
      <div className="title text-center flex-1">{title}</div>
      <button
        type="button"
        className="invisible flex w-5 justify-center items-center"
      >
        <img src={back} className="w-2.5" />
      </button>
    </div>
  );
}
