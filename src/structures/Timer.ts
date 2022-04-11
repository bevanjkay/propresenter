import APITimer, { TimeOfDay, TimerState } from "../types/timer"

class Timer {
    uuid: string
    name: string
    index: number
    allowsOverrun: boolean
    duration?: number
    timeOfDay?: number
    period?: TimeOfDay
    startTime?: number
    endTime?: number
    time?: string
    state?: TimerState
    constructor(timerData: APITimer) {
        this.uuid = timerData.id.uuid
        this.name = timerData.id.name
        this.index = timerData.id.index
        this.allowsOverrun = timerData.allows_overrun
        if (timerData.countdown) {
            this.duration = timerData.countdown.duration
        }
        if (timerData.count_down_to_time) {
            this.timeOfDay = timerData.count_down_to_time.time_of_day
            this.period = timerData.count_down_to_time.period
        }
        if (timerData.elapsed) {
            this.startTime = timerData.elapsed.start_time
            this.endTime = timerData.elapsed.end_time
        }
        if (timerData.time) {
            this.time = timerData.time
        }
        if (timerData.state) {
            this.state = timerData.state
        }
    }
}

export default Timer
