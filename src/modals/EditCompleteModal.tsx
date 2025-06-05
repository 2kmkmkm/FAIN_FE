import Modal from "../components/common/Modal";
import { useNavigate } from "react-router-dom";

export default function EditCompleteModal() {
  const nav = useNavigate();

  return (
    <Modal
      contents="정보 수정이 완료되었습니다"
      btnList={[{ label: "확인", onClick: () => nav("/my") }]}
    />
  );
}
