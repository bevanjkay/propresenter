import type { Method } from "axios"
import RequestHandler from "../RequestHandler"

type ClientOptions = {
    ip: string
    port: string
    version?: string
    debug?: boolean
}

class ProPresenter {
    ip: string

    port: string

    debug: boolean

    version: string

    requestHandler: RequestHandler

    url: string

    constructor(options: ClientOptions) {
        this.debug = options.debug || false
        this.port = options.port
        this.ip = options.ip || "127.0.0.1"
        this.version = options.version || "v1"
        this.requestHandler = new RequestHandler(this)

        this.url = `http://${options.ip}:${options.port}/${this.version}`
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

export default ProPresenter
