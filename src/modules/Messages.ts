/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import Collection from "../util/Collection"
import BaseModule from "./BaseModule"
import Message from "../structures/Message"
import APIMessage, { APIMessageTimerFormat } from "../types/message"
import { FetchId } from "../types/id"

type CountdownSet = {
    duration?: number
    allowOverrun?: boolean
    format?: APIMessageTimerFormat
}

class Messages extends BaseModule {
    async fetchAll(): Promise<Collection<string, Message>> {
        const result = await this.client.request("/messages")
        const messagesReturned: Collection<string, Message> = new Collection()
        result.forEach((r: APIMessage) => {
            messagesReturned.set(r.id.name, new Message(r))
        })
        return messagesReturned
    }

    async fetch(id: FetchId) {
        const result = await this.client.request(`/messages/${id}`)
        return new Message(result)
    }

    async delete(id: FetchId) {
        await this.client.request(`/messages/${id}`, {}, "DELETE")
        return true
    }

    async setText(id: FetchId, text: string) {}

    async setClock(id: FetchId, clock: boolean) {
        return null
    }

    async setCountdown(id: FetchId, options: CountdownSet) {}
}

export default Messages
