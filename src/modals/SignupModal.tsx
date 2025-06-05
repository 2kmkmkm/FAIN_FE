import Modal from "../components/common/Modal";

export default function SignupModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal
      contents="회원가입이 완료되었습니다"
      btnList={[{ label: "닫기", isCancel: false, onClick: onClose }]}
    />
  );
}
