export const formatDateToString = (date: Date | null) =>
    date ? date.toISOString().split("T")[0] : "";
  
  export const parseStringToDate = (dateStr: string): Date | null => {
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? null : parsed;
  };
  