import { AxiosResponse } from "axios"

class APIError extends Error {
    status: number

    constructor(response: AxiosResponse) {
        super()
        this.name = this.constructor.name
        this.status = response.status
        switch (response.status) {
        case 400:
            this.message = "The provided data was invalid"
            break
        case 404:
            this.message = "The requested endpoint was not found."
            break
        case 429:
            this.message = "The endpoint has been ratelimited."
            break
        default:
            this.message = "An unknown error occurred."
            break
        }
    }
}

export default APIError
