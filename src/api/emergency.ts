import instance from "./instance";

export const getEmergencyReport = async (reportId: number) => {
    const res = await instance.get('/reports', { params: { reportId }});
    console.log("getEmergencyReport: ", res.data.data);
    return res.data.data;
}

export const postActionType = async (reportId: number, action: "119" | 
    "family"
) => {
    const res = await instance.post(`/actions/${reportId}`, { action })
    console.log(res.data.data);
    return res.data.data;
}

export const postRegisterToken = async (token: string, userId: string) => {
    const res = await instance.post('/fcm/registers', { token, userId });
    console.log(res.data);
    return res.data;
}