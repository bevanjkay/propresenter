import Timer from "../structures/Timer"
import { FetchId } from "../types/id"
import APITimer from "../types/timer"
import Collection from "../util/Collection"
import BaseModule from "./BaseModule"

class Timers extends BaseModule {
    async fetchAll(): Promise<Collection<string, Timer>> {
        const result = await this.client.request("/timers")
        const timersReturned: Collection<string, Timer> = new Collection()
        result.forEach((r: APITimer) => {
            timersReturned.set(r.id.name, new Timer(r))
        })
        return timersReturned
    }

    async getCurrentTime(
        timerId?: FetchId,
    ): Promise<Timer | Collection<string, Timer>> {
        const result = await this.client.request("/timers/current")

        if (timerId) {
            const foundTimer: APITimer = result.find(
                (r: APITimer) => r.id.name === timerId
                    || r.id.uuid === timerId
                    || r.id.index === timerId,
            )
            return new Timer(foundTimer)
        }
        const timersReturned: Collection<string, Timer> = new Collection()
        result.forEach((r: APITimer) => {
            timersReturned.set(r.id.name, new Timer(r))
        })
        return timersReturned
    }

    async fetch(id: FetchId) {
        const result = await this.client.request(`/timers/${id}`)
        return new Timer(result)
    }

    async stop(id?: FetchId) {
        if (id) {
            await this.client.request(`/timers/${id}/stop`)
        } else {
            await this.client.request(`/timers/stop`)
        }
        return true
    }

    async start(id?: FetchId) {
        if (id) {
            await this.client.request(`/timers/${id}/start`)
        } else {
            await this.client.request(`/timers/start`)
        }
        return true
    }

    async reset(id?: FetchId) {
        if (id) {
            await this.client.request(`/timers/${id}/reset`)
        } else {
            await this.client.request(`/timers/reset`)
        }
        return true
    }

    async delete(id: FetchId) {
        await this.client.request(`/timers/${id}`, {}, "DELETE")
        return true
    }

    async getSystemTime() {
        const systemTime: number = await this.client.request(
            `/timers/system_time`,
        )
        return systemTime
    }

    async getVideoCountdown() {
        const videoCountdown: string = await this.client.request(
            `/timers/video_countdown`,
        )
        return videoCountdown
    }
}

export default Timers
