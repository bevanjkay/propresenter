import axios, { AxiosRequestConfig, Method } from "axios"

import util from "util"
import APIError from "../errors/APIError"
import NotRunningError from "../errors/NotRunningError"

import Client from "../client/Client"

class RequestHandler {
    client: Client

    constructor(client: Client) {
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
            baseURL: this.client.options.url,
            url: endpoint,
            method,
            data: body,
            params: query,
            timeout: 10000,
        }

        const res = await axios.request(options).catch((error) => {
            if (error.code === "ECONNABORTED") throw new NotRunningError()
            throw new Error(error)
        })

        // eslint-disable-next-line no-console
        if (this.client.options.requestDebug) console.debug(res)
        // eslint-disable-next-line no-console
        if (this.client.options.debug) console.debug(util.inspect(res.data, { showHidden: false, depth: null }))

        if (res.status >= 400) {
            throw new APIError(res)
        } else {
            return res.data
        }
    }
}

export default RequestHandler
