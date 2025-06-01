import Button from "../components/common/Button";
import Input from "../components/common/Input";
import logo_img from "../assets/logo_img.svg";
import logo_word from "../assets/logo_word.svg";
import Alert from "../components/common/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useRedux";
import { loginUser } from "../app/auth";

export default function LoginPage() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userId) {
      setError("아이디를 입력하세요");
      return;
    } else if (!password) {
      setError("비밀번호를 입력하세요");
      return;
    }

    try {
      await dispatch(loginUser({ userId, password })).unwrap();
    } catch {
      console.error("로그인 에러", error);
    }
  };

  return (
    <div className="flex flex-col px-14 gap-6 justify-center items-center min-h-screen">
      <div className="flex flex-col pb-8 justify-center items-center">
        <img src={logo_img} className="w-52" />
        <img src={logo_word} className="w-32" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2.5">
          <Input
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Alert
            className={`${error ? "" : "invisible"} flex justify-center h-6`}
          >
            {error}
          </Alert>
          <div className="flex flex-col gap-2.5">
            <Button type="submit" label="로그인" />
            <button
              type="button"
              className="text-placeholder body-xs underline"
              onClick={() => nav("/signup")}
            >
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
