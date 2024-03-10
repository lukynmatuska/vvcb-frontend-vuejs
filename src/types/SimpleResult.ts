export interface SimpleResult {
    district: string,
    final_time: Number,
    left_time: Number,
    media: string,
    place: string,
    right_time: Number,
    team: string
}

export interface SimpleResultResponse {
    dorostenci?: [SimpleResult],
    muzi?: [SimpleResult],
    veterani?: [SimpleResult],
    zeny?: [SimpleResult]
}
