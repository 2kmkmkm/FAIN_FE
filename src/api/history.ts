import instance from "./instance";

export const getHistoryList = async () => {
    const res = await instance.get("/history");
    console.log("getHistoryList: ", res.data.data);
    return res.data.data;
}

export const getHistoryDetail = async(reportId: number) => {
    const res = await instance.get(`/history/${reportId}`);
    console.log("getHistoryDetail: ", res.data.data);
    return res.data.data;
}