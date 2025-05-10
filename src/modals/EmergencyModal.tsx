import Modal from "../components/common/Modal";
import caution from "../assets/caution.svg";

export default function EmergencyModal({ onClick }: { onClick: () => void }) {
  return (
    <Modal
      img={caution}
      title="Emergency"
      contents="낙상이 감지되었습니다"
      btnList={[{ label: "자세히 보기", onClick: onClick }]}
    />
  );
}
