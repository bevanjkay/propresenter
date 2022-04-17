export type APISlideData = {
    text: string
    notes: string
    uuid: string
}

export type APISlideStatus = {
    current: APISlideData
    next: APISlideData
}
