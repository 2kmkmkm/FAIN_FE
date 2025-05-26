export type HistoryProps = {
    reportId: number,
    date: Date,
    time: string,
    action_type: string,
}

export type EmergencyProps = {
    disease: string;
    allergic: string;
    medicine: string;
    height: number | undefined;
    weight: number | undefined;
    bloodType: string;
}