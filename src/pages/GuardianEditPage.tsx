import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import EditCompleteModal from "../modals/EditCompleteModal";

const data = {
  user_id: "2kmkmkm",
  f_name: "이경민",
  f_tel: "010-2911-6480",
};

export default function GuardianEditPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="flex flex-col px-12 py-10">
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">아이디</div>
            <div className="body-m">{data.user_id}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">이름</div>
            <Input isEdit defaultValue={data.f_name} />
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">연락처</div>
            <Input isEdit defaultValue={data.f_tel} type="tel" />
          </div>
          <div
            className="fixed bottom-8
           left-0 w-full px-14"
          >
            <Button label="수정" type="submit" />
          </div>
        </form>
      </div>
      {isModalOpen && <EditCompleteModal category="보호자" />}
    </>
  );
}
