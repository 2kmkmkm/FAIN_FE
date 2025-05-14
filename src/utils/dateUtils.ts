import { parseISO, format } from "date-fns";

export const formatDateToString = (date: Date | null): string =>
  date ? date.toISOString().split("T")[0] : "";

export const parseStringToDate = (dateStr: string): Date | null => {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? null : parsed;
};

export const formatBirthInfo = (birth: string): { formattedDate: string; age: number } => {
  const birthDate = parseISO(birth); 
  const now = new Date();

  const formattedDate = format(birthDate, "yyyy / MM / dd");

  let age = now.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age -= 1;
  }

  return { formattedDate, age };
};

export const formatDay = (date: Date): string => {
  const day = date.getDate(); 
  const dayOfWeek = date.getDay(); 
  const weekNames = ["일", "월", "화", "수", "목", "금", "토"];

  return `${day}(${weekNames[dayOfWeek]})`;
};
