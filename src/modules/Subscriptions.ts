import Client from "../client/Client"
import BaseModule from "./BaseModule"

import allConnections from "../util/AllStreamingEndpoints"

class Subscriptions extends BaseModule {
    connections: string[]

    constructor(client: Client, connections: string[] = allConnections) {
        super(client)
        this.connections = connections
    }
}

export default Subscriptions
