import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Input from "../components/common/Input";

export default function GuardianEditPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Header title="보호자 정보 수정" isBack />
      <div className="flex flex-col px-12 py-10">
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">아이디</div>
            <div className="body-m">2kmkmkm</div>
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">이름</div>
            <Input isEdit />
          </div>
          <div className="flex flex-row">
            <div className="text-placeholder body-m w-28">전화번호</div>
            <Input isEdit />
          </div>
          <div
            className="fixed bottom-8
           left-0 w-full px-14"
          >
            <Button label="수정" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
