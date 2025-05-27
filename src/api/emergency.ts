import instance from "./instance";

export const getEmergencyReport = async () => {
    const res = await instance.get('/reports');
    console.log("getEmergencyReport: ", res.data.data);
    return res.data.data;
}