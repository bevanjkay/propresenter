import Collection from "@discordjs/collection"
import BaseModule from "./BaseModule"
import APIMacro from "../types/macro"
import Macro from "../structures/Macro"
import Color from "../types/color"

class Macros extends BaseModule {
    async fetchAll() {
        const result = await this.client.request("/macros")
        const macrosReturned = new Collection()
        result.forEach((r: APIMacro) => {
            macrosReturned.set(r.id.name, new Macro(r))
        })
        return macrosReturned
    }

    /**
     * @remarks The ID you pass here can either be the UUID of the macro, the name of the macro, or the 0-based index of the macro.
     */

    async fetch(id: string | number) {
        const fetchId = `${id}` // cast number to a string
        const result = await this.client.request(`/macro/${fetchId}`)
        return new Macro(result)
    }

    async trigger(id: string | number) {
        const fetchId = `${id}`
        await this.client.request(`/macro/${fetchId}/trigger`)
        return true
    }

    async delete(id: string | number) {
        const fetchId = `${id}`
        await this.client.request(`/macro/${fetchId}/delete`, {}, "DELETE")
        return true
    }

    async setName(id: string | number, name: string) {
        const fetchId = `${id}`
        const macro = await this.client.request(`/macro/${fetchId}`)
        macro.id.name = name
        const newMacro = await this.client.request(
            `/macro/${fetchId}`,
            {},
            "PUT",
            macro,
        )
        return new Macro(newMacro.field_macro) // API docs say it should just be newMacro, but it's actually newMacro.field_macro
    }

    async setColor(id: string | number, color: Color) {
        const fetchId = `${id}`
        const macro = await this.client.request(`/macro/${fetchId}`)
        macro.color = color
        const newMacro = await this.client.request(
            `/macro/${fetchId}`,
            {},
            "PUT",
            macro,
        )
        return new Macro(newMacro.field_macro) // API docs say it should just be newMacro, but it's actually newMacro.field_macro
    }
}

export default Macros
