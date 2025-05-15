export const parseAddress = (address: string) => {
  const matches = address.match(/\((.*?)\)\s(.+?)\s(.+)/);
  if (!matches) return { zoneCode: "", roadAddress: "", detailAddress: "" };
  const [, zoneCode, roadAddress, detailAddress] = matches;
  return { zoneCode, roadAddress, detailAddress };
};

export const fullAddress = (zoneCode: string, road: string, detail: string) =>
  `(${zoneCode}) ${road} ${detail}`.trim();