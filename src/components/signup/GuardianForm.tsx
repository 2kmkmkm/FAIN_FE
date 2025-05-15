import Input from "../common/Input";
import type { GuardianFormProps } from "../../type/userType";

export default function GuardianForm({
  guardian,
  handleGuardianChange,
}: GuardianFormProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="title pl-2">보호자 정보</div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row gap-2 h-full">
          <Input
            name="user_id"
            placeholder="아이디"
            value={guardian.user_id}
            onChange={handleGuardianChange}
          />
          <button className="bg-main text-white body-xs w-14 px-1.5 rounded-[10px] flex justify-center items-center">
            중복
            <br />
            확인
          </button>
        </div>
        <Input
          name="password"
          placeholder="비밀번호"
          type="password"
          value={guardian.password}
          onChange={handleGuardianChange}
        />
        <Input
          name="checkedPwd"
          placeholder="비밀번호 확인"
          type="password"
          value={guardian.checkedPwd}
          onChange={handleGuardianChange}
        />
        <Input
          name="f_name"
          placeholder="보호자 이름"
          value={guardian.f_name}
          onChange={handleGuardianChange}
        />
        <Input
          name="f_tel"
          type="tel"
          placeholder="보호자 연락처"
          value={guardian.f_tel}
          onChange={handleGuardianChange}
        />
      </div>
    </div>
  );
}
