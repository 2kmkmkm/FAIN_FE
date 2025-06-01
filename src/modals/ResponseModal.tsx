import Modal from "../components/common/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { postActionType } from "../api/emergency";

export default function ResponseModal() {
  const nav = useNavigate();
  const { reportId } = useParams<{ reportId: string }>();

  const handleActionClick = async (action: "119" | "family") => {
    try {
      const res = await postActionType(Number(reportId), action);
      nav("/streaming");
      return res;
    } catch (error) {
      console.error("postActionType Error: ", error);
    }
  };

  return (
    <Modal
      contents="어떤 조치를 취하셨습니까?"
      btnList={[
        { label: "119 이송", onClick: () => handleActionClick("119") },
        {
          label: "자체 조치",
          isCancel: true,
          onClick: () => handleActionClick("family"),
        },
      ]}
    />
  );
}
