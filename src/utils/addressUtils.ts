export const parseAddress = (address: string) => {
  const match = address.match(/^\((\d{5})\)\s(.+)$/);

  if (!match) {
    return {
      zoneCode: "",
      rest: "",
    };
  }

  const [, zoneCode, rest] = match;
  return { zoneCode, rest };
};

export const fullAddress = (zoneCode: string, rest: string) =>
  `(${zoneCode}) ${rest}`.trim();
