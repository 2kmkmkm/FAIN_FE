import DaumPostCode from "react-daum-postcode";

export type DaumPostcodeData = {
  zonecode: string;
  address: string;
  roadAddress: string;
  jibunAddress: string;
  addressType: "R" | "J";
  bname: string;
  buildingName: string;
  apartment: "Y" | "N";
  userSelectedType: "R" | "J";
};

export default function CustomPostcode({
  onComplete,
}: {
  onComplete: (data: DaumPostcodeData) => void;
}) {
  return (
    <div className="fixed w-[80%] top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg">
      <DaumPostCode onComplete={onComplete} autoClose animation />
    </div>
  );
}
