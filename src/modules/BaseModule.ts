import Client from "../client/Client"

export default abstract class BaseModule {
    readonly client: Client

    constructor(client: Client) {
        this.client = client
    }
}
