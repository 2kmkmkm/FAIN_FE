import axios from "axios";

export const getHospitalByName = async (hospitalName: string) => {
    const res = await axios.get(import.meta.env.VITE_ADDRESS_BASE_URL, {
      params: {
        ServiceKey: import.meta.env.VITE_ADDRESS_SERVICE_KEY,
        yadmNm: hospitalName,
        numOfRows: 10,
        pageNo: 1,
        _type: "json",
      },
    });
    console.log("Requested URL:", res.config)
    return res.data;
};
