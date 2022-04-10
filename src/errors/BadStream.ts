import { AxiosResponse } from "axios"

class NotRunningError extends Error {
    constructor(res: AxiosResponse) {
        super()
        this.message = `The following paths cannot be streamed: ${res.data.join(", ")}`
    }
}

export default NotRunningError
