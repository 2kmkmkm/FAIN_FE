import Modal from "../components/common/Modal";
import { useNavigate } from "react-router-dom";
import { postActionType } from "../api/emergency";
import { useState } from "react";

export default function ResponseModal() {
  const [action, setAction] = useState<"119" | "family">();
  const nav = useNavigate();

  const handleActionClick = (action: "119" | "family") => {
    nav("/streaming");
  };

  return (
    <Modal
      contents="어떤 조치를 취하셨습니까?"
      btnList={[
        { label: "119 이송", onClick: onAmbulanceClick },
        { label: "자체 조치", isCancel: true, onClick: onGuardianClick },
      ]}
    />
  );
}
