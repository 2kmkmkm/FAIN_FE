import Dropdown from "./components/common/Dropdown";

const list = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function App() {
  return <Dropdown list={list} category="혈액형" />;
}
