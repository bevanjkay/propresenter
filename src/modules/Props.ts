import Collection from "@discordjs/collection"
import BaseModule from "./BaseModule"
import APIProp from "../types/prop"
import Prop from "../structures/Prop"

class Props extends BaseModule {
    async fetchAll(): Promise<Collection<string, Prop>> {
        const result = await this.client.request("/props")
        const propsReturned: Collection<string, Prop> = new Collection()
        result.forEach((r: APIProp) => {
            propsReturned.set(r.id.name, new Prop(r))
        })
        return propsReturned
    }

    /**
     * @remarks The ID you pass here can either be the UUID of the prop, the name of the prop, or the 0-based index of the prop.
     */

    async fetch(id: string | number) {
        const fetchId = `${id}` // cast number to a string
        const result = await this.client.request(`/prop/${fetchId}`)
        return new Prop(result)
    }

    /**
     * @remarks The ID you pass here can either be the UUID of the prop, the name of the prop, or the 0-based index of the prop.
     */

    async trigger(id: string | number) {
        const fetchId = `${id}`
        await this.client.request(`/prop/${fetchId}/trigger`)
        return true
    }

    /**
     * @remarks The ID you pass here can either be the UUID of the prop, the name of the prop, or the 0-based index of the prop.
     */

    async clear(id: string | number) {
        const fetchId = `${id}`
        await this.client.request(`/prop/${fetchId}/clear`)
        return true
    }

    /**
     * @remarks The ID you pass here can either be the UUID of the prop, the name of the prop, or the 0-based index of the prop.
     */

    async delete(id: string | number) {
        const fetchId = `${id}`
        await this.client.request(`/prop/${fetchId}/delete`, {}, "DELETE")
        return true
    }

    /**
     * @remarks Not yet implemented fully, due to it being an image
     */

    async getThumbnail(id: string | number) {
        const fetchId = `${id}`
        const thumbnail = await this.client.request(`/prop/${fetchId}/thumbnail`)
        return thumbnail
    }
}

export default Props
