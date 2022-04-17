import type { Method } from "axios"
import { EventEmitter } from "events"
import {
    Macros,
    Props,
    Messages,
    Audio,
    Capture,
    Timers,
    Announcements,
    Slides,
    RequestHandler,
    StreamHandler,
} from ".."
import SystemInfo from "../structures/SystemInfo"

type ClientOptions = {
    ip: string
    port: string
    debug?: boolean
    requestDebug?: boolean
    version?: string
    url: string
}

class Client extends EventEmitter {
    options: ClientOptions
    requestHandler: RequestHandler
    streamHandler: StreamHandler
    macros: Macros
    props: Props
    messages: Messages
    timers: Timers
    announcements: Announcements
    audio: Audio
    capture: Capture
    slides: Slides

    constructor(options: ClientOptions) {
        super()
        this.options = {
            debug: options.debug || false,
            requestDebug: options.requestDebug || false,
            port: options.port,
            ip: options.ip || "127.0.0.1",
            version: options.version || "v1",
            url: "",
        }
        this.options.url = `http://${this.options.ip}:${this.options.port}/${this.options.version}`
        this.requestHandler = new RequestHandler(this)
        this.streamHandler = new StreamHandler(this)

        this.macros = new Macros(this)
        this.props = new Props(this)
        this.messages = new Messages(this)
        this.timers = new Timers(this)
        this.announcements = new Announcements(this)
        this.audio = new Audio(this)
        this.capture = new Capture(this)
        this.slides = new Slides(this)
    }

    async findMyMouse() {
        await this.request("/find_my_mouse")
        return true
    }

    async getInfo() {
        const info = await this.request("/version")
        return new SystemInfo(info)
    }

    /**
     *
     * @param endpoint - The endpoint to fetch
     * @param query - Any query strings to add
     * @param method - The HTTP method to use
     * @param body - The HTTP body to send
     * @returns The response from the endpoint
     */
    request(endpoint: string, query = {}, method: Method = "GET", body = {}) {
        return this.requestHandler.request(endpoint, method, query, body)
    }
}

export default Client
