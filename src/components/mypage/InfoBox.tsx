import edit from "../../assets/edit.svg";

type InfoBoxProps = {
  title: string;
  config: { label: string; key: string }[];
  data: Record<string, string | number>;
  unitMap?: Record<string, string>;
  editable: boolean;
  onEdit: () => void;
};

export default function InfoBox({
  title,
  config,
  data,
  unitMap = {},
  editable = false,
  onEdit,
}: InfoBoxProps) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">
        <div className="title">{title}</div>
        {editable && onEdit && (
          <button onClick={onEdit} className="flex w-fit justify-end">
            <img src={edit} className="w-5" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {config.map(({ key, label }) => {
          const value = data[key];
          const formatted =
            value !== undefined && value !== null
              ? `${value}${unitMap[key] || ""}`
              : "-";

          return (
            <div key={key} className="flex gap-5 items-start">
              <div className="w-24 text-placeholder body-s pt-[2px]">
                {label}
              </div>
              <div className="body-s whitespace-pre-wrap break-words">
                {formatted}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
