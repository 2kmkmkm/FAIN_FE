import logo_img from "../../assets/logo_img.svg";

export default function SideHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-2 py-6 px-7">
      <img src={logo_img} className="w-12" />
      <div className="heading-lg">{title}</div>
    </div>
  );
}
