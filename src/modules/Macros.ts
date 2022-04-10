import Collection from "@discordjs/collection"
import BaseModule from "./BaseModule"
import APIMacro from "../types/macro"
import Macro from "../structures/Macro"
import Color from "../types/color"
import { FetchId } from "../types/id"

class Macros extends BaseModule {
    async fetchAll(): Promise<Collection<string, Macro>> {
        const result = await this.client.request("/macros")
        const macrosReturned: Collection<string, Macro> = new Collection()
        result.forEach((r: APIMacro) => {
            macrosReturned.set(r.id.name, new Macro(r))
        })
        return macrosReturned
    }

    async fetch(id: FetchId) {
        const result = await this.client.request(`/macro/${id}`)
        return new Macro(result)
    }

    async trigger(id: FetchId) {
        await this.client.request(`/macro/${id}/trigger`)
        return true
    }

    async delete(id: FetchId) {
        await this.client.request(`/macro/${id}/delete`, {}, "DELETE")
        return true
    }

    async setName(id: FetchId, name: string) {
        const macro = await this.client.request(`/macro/${id}`)
        macro.id.name = name
        const newMacro = await this.client.request(
            `/macro/${id}`,
            {},
            "PUT",
            macro,
        )
        return new Macro(newMacro.field_macro) // API docs say it should just be newMacro, but it's actually newMacro.field_macro
    }

    async setColor(id: FetchId, color: Color) {
        const macro = await this.client.request(`/macro/${id}`)
        macro.color = color
        const newMacro = await this.client.request(
            `/macro/${id}`,
            {},
            "PUT",
            macro,
        )
        return new Macro(newMacro.field_macro) // API docs say it should just be newMacro, but it's actually newMacro.field_macro
    }
}

export default Macros
