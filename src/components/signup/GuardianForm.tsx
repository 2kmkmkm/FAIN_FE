import React from "react";
import Input from "../common/Input";
import type { GuardianFormProps } from "../../type/userType";

function GuardianForm({
  guardian,
  handleGuardianChange,
  handleCheckId,
}: GuardianFormProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="title pl-2">보호자 정보</div>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row gap-2 h-full">
          <Input
            name="userId"
            placeholder="아이디"
            value={guardian.userId}
            onChange={handleGuardianChange}
          />
          <button
            onClick={handleCheckId}
            type="button"
            className="bg-main text-white body-xs w-14 px-1.5 rounded-[10px] flex justify-center items-center"
          >
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
          name="fName"
          placeholder="보호자 이름"
          value={guardian.fName}
          onChange={handleGuardianChange}
        />
        <Input
          name="fTel"
          type="tel"
          placeholder="보호자 연락처"
          value={guardian.fTel}
          onChange={handleGuardianChange}
        />
      </div>
    </div>
  );
}

export default React.memo(GuardianForm);
