import instance from "./instance";

export const getSummary = async (year: number, month: number) => {
    const res = await instance.get(`/month/counts`, {
  params: { year, month }
} );
    console.log("getSummary: ", res.data.data);
    return res.data.data;
}

export const getGraph = async (year: number, month: number) => {
    const res = await instance.get(`/month/graphs`, {
  params: { year, month }
});
    console.log("getGraph: ", res.data.data);
    return res.data.data;
}

export const getReport = async (year: number, month: number) => {
    const res = await instance.get(`/month/reports`, {
  params: { year, month }
});
    console.log("getReport: ", res.data.data);
    return res.data.data;
}