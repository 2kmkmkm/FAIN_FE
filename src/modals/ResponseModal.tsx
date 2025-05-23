import Modal from "../components/common/Modal";
import { useNavigate } from "react-router-dom";

export default function ResponseModal() {
  const nav = useNavigate();

  const onAmbulanceClick = () => {
    nav("/streaming");
  };
  const onGuardianClick = () => {
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
