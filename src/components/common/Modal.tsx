import Button from "./Button";

type ModalProps = {
  img?: string;
  title?: string;
  contents: string;
  btnList: { label: string; isCancel?: boolean; onClick: () => void }[];
};

export default function Modal({ img, title, contents, btnList }: ModalProps) {
  return (
    <div className="w-full min-h-full fixed top-0 left-0 bg-[#333333]/50 flex justify-center items-center">
      <div className="bg-white w-64 gap-3 min-h-36 px-7 py-6 flex flex-col justify-center items-center overflow-hidden rounded-[30px] shadow-[0px_2px_15px_0px_rgba(111,111,111,0.20)]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row pt-1 justify-start items-center gap-2">
            <img src={img} className="w-7" />
            <div className="heading-s">{title}</div>
          </div>
          <div className="w-full py-5 flex flex-col justify-start items-start">
            <div className="body-m text-center">{contents}</div>
          </div>
        </div>
        <div className="flex justify-center items-center px-5 gap-2 pb-1">
          {btnList.map((item) => (
            <Button
              key={item.label}
              label={item.label}
              isCancel={item.isCancel}
              onClick={item.onClick}
              isSmall
            />
          ))}
        </div>
      </div>
    </div>
  );
}
