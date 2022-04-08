import axios, { AxiosRequestConfig, Method } from "axios"

import APIError from "./errors/APIError"
import RatelimitError from "./errors/RatelimitError"

import AmariBot from "./client/Client"

class RequestHandler {
    client: AmariBot

    constructor(client: AmariBot) {
        this.client = client
    }

    /**
     *
     * @param endpoint - The endpoint to fetch
     * @param method - The HTTP method to use
     * @param query - Any query strings to add
     * @param body - The HTTP body to send
     * @returns The response from the endpoint
     */
    async request(
        endpoint: string,
        method: Method,
        query: unknown = {},
        body: unknown = {},
    ) {
        const options: AxiosRequestConfig = {
            validateStatus: null,
            headers: {
                "Content-Type": "application/json",
            },
            baseURL: this.client.url,
            url: endpoint,
            method,
            data: body,
            params: query,
            timeout: 15000,
        }

        const res = await axios.request(options)

        if (res.status >= 200 && res.status < 300) {
            return res.data
        }
        if (res.status === 429) {
            throw new RatelimitError(res)
        } else {
            throw new APIError(res)
        }
    }
}

export default RequestHandler
