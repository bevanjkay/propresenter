import Collection from "@discordjs/collection"
import BaseModule from "./BaseModule"
import APIProp from "../types/prop"
import Prop from "../structures/Prop"
import { FetchId } from "../types/id"

class Props extends BaseModule {
    async fetchAll(): Promise<Collection<string, Prop>> {
        const result = await this.client.request("/props")
        const propsReturned: Collection<string, Prop> = new Collection()
        result.forEach((r: APIProp) => {
            propsReturned.set(r.id.name, new Prop(r))
        })
        return propsReturned
    }

    async fetch(id: FetchId) {
        const result = await this.client.request(`/prop/${id}`)
        return new Prop(result)
    }

    async trigger(id: FetchId) {
        await this.client.request(`/prop/${id}/trigger`)
        return true
    }

    async clear(id: FetchId) {
        await this.client.request(`/prop/${id}/clear`)
        return true
    }

    async delete(id: FetchId) {
        await this.client.request(`/prop/${id}/delete`, {}, "DELETE")
        return true
    }

    /**
     * @remarks Not yet implemented fully, due to it being an image
     */

    async getThumbnail(id: FetchId) {
        const thumbnail = await this.client.request(`/prop/${id}/thumbnail`)
        return thumbnail
    }
}

export default Props
