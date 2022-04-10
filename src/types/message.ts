import { APIId } from "./id"

export type DateTimeStyle = "none" | "short" | "medium" | "long" | "full"
export type TimerStyle =
    | "none"
    | "short"
    | "long"
    | "remove_short"
    | "remove_long"
export type TimeOfDay = "am" | "pm" | "24_hour"

export type APIMessageText = {
    name: string
    text: {
        text: string
    }
}

export type APIMessageClock = {
    name: string
    clock: {
        date: DateTimeStyle
        time: DateTimeStyle
        is_24_hours: boolean
    }
}

export type APIMessageTimerFormat = {
    hour: TimerStyle
    minute: TimerStyle
    second: TimerStyle
    millisecond: TimerStyle
}

export type APIMessageTimer = {
    name: string
    timer: {
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
        format: APIMessageTimerFormat
    }
}

type APIMessage = {
    id: APIId
    message: string
    tokens: [APIMessageText | APIMessageClock | APIMessageTimer]
    theme: APIId
}
export default APIMessage
