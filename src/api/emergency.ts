import instance from "./instance";

export const getEmergencyReport = async ():Promise<{ situation_time:Date; report:string; hospital_name: string; hospital_tel: string}> => {
    const res = await instance.get('/reports');
    return res.data;
}