import Modal from "./components/common/Modal";

export default function App() {
  return (
    <>
      <div>안녕</div>
      <Modal
        contents="어떤 조치를 취하셨습니까?"
        btnList={[
          { label: "119 이송", isCancel: false },
          { label: "보호자 조치", isCancel: true },
        ]}
      />
    </>
  );
}
