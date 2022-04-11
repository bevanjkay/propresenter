export type StatusType = "active" | "inactive" | "caution" | "error"
export type Resolution = {
    width: number
    height: number
}

export type APICaptureStatus = {
    status: StatusType
    capture_time: string
    status_description: string
}

export type APIDiskCaptureSettings = {
    file_location: string
    encoding?: string
    resolution: Resolution
    frame_rate: string
}

export type APIRTMPCaptureSettings = {
    url: string
    key: string
    encoding: string
    save_local: boolean
    file_location?: string
}

export type APIResiCaptureSettings = {
    event_name?: string
    event_description?: string
    destination_group: string
    encoding: string
}

export type APICaptureSettings = {
    source: string
    audio_routing: [number[]]
    disk?: APIDiskCaptureSettings
    rtmp?: APIRTMPCaptureSettings
    resi?: APIResiCaptureSettings
}
