import instance from "./instance";

export const getEmergencyReport = async (reportId: number) => {
    const res = await instance.get(`/reports/${reportId}`);
    console.log("getEmergencyReport: ", res.data.data);
    return res.data.data;
}

export const patchActionType = async (reportId: number, actionType: "_119" | 
    "FAMILY"
) => {
    const res = await instance.patch(`/actions/${reportId}`, { actionType })
    console.log("postActionType: ",  res.data);
    return res.data;
}

export const postRegisterToken = async (token: string) => {
    const res = await instance.post('/fcm/registers', { token });
    console.log("postRegisterToken: ", res.data);
    return res.data;
}