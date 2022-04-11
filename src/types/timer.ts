import { APIId } from "./id"

export type TimeOfDay = "am" | "pm" | "24_hour"
export type TimerState = "stopped" | "running" | "complete" | "overrun"

type APITimer = {
    id: APIId
    allows_overrun: boolean
    countdown?: {
        duration: number
    }
    count_down_to_time?: {
        time_of_day: number
        period: TimeOfDay
    }
    elapsed?: {
        start_time: number
        end_time?: number
    }
    time?: string
    state?: TimerState

}

export default APITimer
