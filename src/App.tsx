import Input from "./components/common/Input";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="아이디"
        value={value}
        onChange={onChangeValue}
      />
      <Input
        type="text"
        placeholder="아이디"
        value={value}
        onChange={onChangeValue}
        edit
      />
    </>
  );
}
