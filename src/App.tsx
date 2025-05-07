import Button from "./components/common/Button";

export default function App() {
  return (
    <>
      <Button onClick={() => {}} label="로그인" />
      <Button onClick={() => {}} label="취소" isCancel />
      <Button onClick={() => {}} label="확인" isSmall />
      <Button onClick={() => {}} label="닫기" isSmall isCancel />
    </>
  );
}
