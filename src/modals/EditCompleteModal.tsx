import Modal from "../components/common/Modal";
import { useNavigate } from "react-router-dom";

export default function EditCompleteModal({
  category,
}: {
  category: "보호자" | "환자";
}) {
  const nav = useNavigate();

  const onClickButton = (category: string) => {
    nav("/my");
    console.log(category);
  };

  return (
    <Modal
      contents="정보 수정이 완료되었습니다"
      btnList={[{ label: "확인", onClick: () => onClickButton(category) }]}
    />
  );
}
