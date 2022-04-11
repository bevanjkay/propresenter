/* eslint-disable max-classes-per-file */
import {
    APICaptureSettings,
    APICaptureStatus,
    APIDiskCaptureSettings,
    APIResiCaptureSettings,
    APIRTMPCaptureSettings,
    Resolution,
    StatusType,
} from "../types/capture"

export class CaptureStatus {
    status: StatusType
    captureTime: string
    statusDescription: string
    constructor(data: APICaptureStatus) {
        this.status = data.status
        this.captureTime = data.capture_time
        this.statusDescription = data.status_description
    }
}

export class DiskCaptureSettings {
    fileLocation: string
    encoding?: string
    resolution: Resolution
    frameRate: string
    constructor(settings: APIDiskCaptureSettings) {
        this.fileLocation = settings.file_location
        this.encoding = settings.encoding
        this.resolution = settings.resolution
        this.frameRate = settings.frame_rate
    }
}

export class RTMPCaptureSettings {
    url: string
    key: string
    encoding: string
    saveLocal: boolean
    fileLocation?: string
    constructor(settings: APIRTMPCaptureSettings) {
        this.url = settings.url
        this.key = settings.key
        this.encoding = settings.encoding
        this.saveLocal = settings.save_local
        this.fileLocation = settings.file_location
    }
}

export class ResiCaptureSettings {
    eventName?: string
    eventDescription?: string
    destinationGroup: string
    encoding: string
    constructor(settings: APIResiCaptureSettings) {
        this.eventName = settings.event_name
        this.eventDescription = settings.event_description
        this.destinationGroup = settings.destination_group
        this.encoding = settings.encoding
    }
}

class CaptureSettings {
    source: string
    audioRouting: [number[]]
    disk?: DiskCaptureSettings
    rtmp?: RTMPCaptureSettings
    resi?: ResiCaptureSettings
    constructor(settings: APICaptureSettings) {
        this.source = settings.source
        this.audioRouting = settings.audio_routing
        this.disk = settings.disk && new DiskCaptureSettings(settings.disk)
        this.rtmp = settings.rtmp && new RTMPCaptureSettings(settings.rtmp)
        this.resi = settings.resi && new ResiCaptureSettings(settings.resi)
    }
}

export default CaptureSettings
