import instance from "./instance";

export const getEmergencyAlert = async ():Promise<{message:string; situation_time:Date}> => {
    const res = await instance.get('/fcm/alert');
    return res.data;
}