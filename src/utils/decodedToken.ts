import { jwtDecode } from "jwt-decode";

type DecodedToken = {
    userId: number;
};

const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (err) {
    console.error("토큰 디코딩 실패", err);
    return null;
  }
};

export default decodeToken;