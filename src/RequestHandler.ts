import axios, { AxiosRequestConfig, Method } from "axios"

import APIError from "./errors/APIError"
import RatelimitError from "./errors/RatelimitError"

import AmariBot from "./ProPresenter"

class RequestHandler {
    client: AmariBot

    constructor(client: AmariBot) {
        this.client = client
    }

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
        } if (res.status === 429) {
            throw new RatelimitError(res)
        } else {
            throw new APIError(res)
        }
    }
}

export default RequestHandler
