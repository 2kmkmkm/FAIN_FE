import Modal from "../components/common/Modal";
import { useNavigate } from "react-router-dom";

export default function ResponseModal() {
  const nav = useNavigate();

  const onAmbulanceClick = () => {
    nav(-1);
  };
  const onGuardianClick = () => {
    nav(-1);
  };

  return (
    <Modal
      contents="어떤 조치를 취하셨습니까?"
      btnList={[
        { label: "119 이송", onClick: onAmbulanceClick },
        { label: "보호자 조치", isCancel: true, onClick: onGuardianClick },
      ]}
    />
  );
}
