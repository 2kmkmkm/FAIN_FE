import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import type { PatientPhysicalFormProps } from "../../type/userType";

export default function PatientPhysicalForm({
  physical,
  handlePhysicalChange,
}: PatientPhysicalFormProps) {
  const handleDropdownSelect = (label: string) => {
    handlePhysicalChange({
      target: { name: "bloodtype", value: label },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <div className="title pl-2">환자 신체 정보</div>
      <div className="flex flex-col gap-2.5">
        <Input
          name="height"
          type="number"
          placeholder="신장 (cm)"
          value={physical.height}
          onChange={handlePhysicalChange}
        />
        <Input
          name="weight"
          type="number"
          placeholder="체중 (kg)"
          value={physical.weight}
          onChange={handlePhysicalChange}
        />
        <Dropdown
          category="혈액형"
          selectedValue={physical.bloodtype}
          onSelect={handleDropdownSelect}
          list={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
        />
      </div>
    </div>
  );
}
