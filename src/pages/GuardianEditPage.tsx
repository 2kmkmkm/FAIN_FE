import Button from "../components/common/Button";
import Input from "../components/common/Input";
import EditCompleteModal from "../modals/EditCompleteModal";
import Header from "../components/common/Header";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo, patchUserInfo } from "../api/user";
import { setGuardian } from "../app/guardianSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";

export default function GuardianEditPage() {
  const guardian = useAppSelector((state) => state.guardian);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fName, setfName] = useState(guardian.fName);
  const [fTel, setfTel] = useState(guardian.fTel);

  const mutation = useMutation({
    mutationFn: () => patchUserInfo(guardian),
    onSuccess: async () => {
      const { guardian: newGuardian } = await getUserInfo();
      dispatch(setGuardian(newGuardian));
      setIsModalOpen(true);
    },
    onError: (err) => {
      console.error("보호자 정보 수정 실패:", err);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <Header title="보호자 정보 수정" />
      <div className="flex flex-col px-12 py-10">
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">아이디</div>
            <div className="body-m">{guardian.userId}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">이름</div>
            <Input
              isEdit
              placeholder={fName}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">연락처</div>
            <Input
              isEdit
              placeholder={fTel}
              type="tel"
              onChange={(e) => setfTel(e.target.value)}
            />
          </div>
          <div className="fixed bottom-8 left-0 w-full px-14">
            <Button label="수정" type="submit" />
          </div>
        </form>
      </div>
      {isModalOpen && <EditCompleteModal category="보호자" />}
    </>
  );
}
