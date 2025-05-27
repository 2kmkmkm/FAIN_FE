export type HistoryProps = {
    report_id: number,
    situation_time: Date,
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