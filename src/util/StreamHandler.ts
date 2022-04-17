/* eslint-disable no-restricted-syntax */
import fetch from "node-fetch"
import { Client } from ".."

class StreamHandler {
    client: Client
    constructor(client: Client) {
        this.client = client
    }

    async start(endpoint: string, eventName: string) {
        const response = await fetch(`${this.client.options.url}${endpoint}?chunked=true`)

        try {
            if (response.body) {
                for await (const chunk of response.body) {
                    this.client.emit(eventName, JSON.parse(chunk.toString()))
                }
            }
        } catch {
            this.client.emit("streamError", { endpoint, eventName })
        }
    }
}

export default StreamHandler
