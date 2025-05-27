import instance from "./instance";

export const getSummary = async (year:number, month:number) => {
    const res = await instance.get(`/month/counts?year=${year}&month=${month}`);
    console.log("getSummary: ", res.data.data);
    return res.data.data;
}

export const getGraph = async (year:number, month:number) => {
    const res = await instance.get(`/month/graphs?year=${year}&month=${month}`);
    console.log("getGraph: ", res.data.data);
    return res.data.data;
}

export const getReport = async (year:number, month:number) => {
    const res = await instance.get(`/month/reports?year=${year}&month=${month}`);
    console.log("getReport: ", res.data.data);
    return res.data.data;
}