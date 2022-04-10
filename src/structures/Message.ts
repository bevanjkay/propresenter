/* eslint-disable max-classes-per-file */
import { APIId } from "../types/id"
import APIMessage, {
    APIMessageClock,
    APIMessageText,
    APIMessageTimer,
    DateTimeStyle,
    TimeOfDay,
    TimerStyle,
} from "../types/message"
import Collection from "../util/Collection"

class MessageText {
    name: string
    text: string
    constructor(textData: APIMessageText) {
        this.name = textData.name
        this.text = textData.text.text
    }
}

class MessageClock {
    name: string
    date: DateTimeStyle
    time: DateTimeStyle
    is24Hours: boolean
    constructor(clockData: APIMessageClock) {
        this.name = clockData.name
        this.date = clockData.clock.date
        this.time = clockData.clock.time
        this.is24Hours = clockData.clock.is_24_hours
    }
}

class MessageTimer {
    name: string
    hour: TimerStyle
    minute: TimerStyle
    second: TimerStyle
    millisecond: TimerStyle
    allowsOverrun: boolean
    duration?: number
    timeOfDay?: number
    period?: TimeOfDay
    startTime?: number
    endTime?: number
    constructor(timerData: APIMessageTimer) {
        this.name = timerData.name
        this.hour = timerData.timer.format.hour
        this.minute = timerData.timer.format.minute
        this.second = timerData.timer.format.second
        this.millisecond = timerData.timer.format.millisecond
        this.allowsOverrun = timerData.timer.allows_overrun
        if (timerData.timer.countdown) {
            this.duration = timerData.timer.countdown.duration
        }
        if (timerData.timer.count_down_to_time) {
            this.timeOfDay = timerData.timer.count_down_to_time.time_of_day
            this.period = timerData.timer.count_down_to_time.period
        }
        if (timerData.timer.elapsed) {
            this.startTime = timerData.timer.elapsed.start_time
            this.endTime = timerData.timer.elapsed.end_time
        }
    }
}

class Message {
    uuid: string
    name: string
    index: number
    message: string
    tokens: Collection<string, MessageClock | MessageText | MessageTimer>
    theme: APIId

    constructor(message: APIMessage) {
        this.uuid = message.id.uuid
        this.name = message.id.name
        this.index = message.id.index
        this.tokens = new Collection()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        message.tokens.forEach((token: any) => {
            if (token.clock) {
                this.tokens.set(token.name, new MessageClock(token))
            } else if (token.text) {
                this.tokens.set(token.name, new MessageText(token))
            } else if (token.timer) {
                this.tokens.set(token.name, new MessageTimer(token))
            }
        })
        this.message = message.message
        this.theme = message.theme
    }
}

export default Message
