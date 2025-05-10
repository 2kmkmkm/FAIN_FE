import person from "../../assets/person.svg";
import { formatBirthInfo } from "../../utils/dateUtils";

export default function PatientBasicInfo({
  name,
  birth,
}: {
  name: string;
  birth: string;
}) {
  const { formattedDate, age } = formatBirthInfo(birth);

  return (
    <div className="flex flex-col items-center gap-2 text-center w-full">
      <div className="flex items-center justify-center gap-2">
        <div className="flex justify-center items-center w-fit">
          <img src={person} className="w-5" />
        </div>
        <div className="heading-s w-fit">{name}님</div>
      </div>
      <div className="body-s text-placeholder">
        {formattedDate} (만 {age}세)
      </div>
    </div>
  );
}
