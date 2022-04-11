import APIAnnouncementStatus from "../types/announcement"

class AnnouncementStatus {
    isRunning: boolean
    currentTime: number

    constructor(data: APIAnnouncementStatus) {
        this.isRunning = data.is_running
        this.currentTime = data.current_time
    }
}

export default AnnouncementStatus
