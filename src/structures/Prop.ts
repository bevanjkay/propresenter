import APIProp from "../types/prop"

class Macro {
    uuid: string
    name: string
    index: number
    active: boolean

    constructor(prop: APIProp) {
        this.uuid = prop.id.uuid
        this.name = prop.id.name
        this.index = prop.id.index
        this.active = prop.is_active
    }
}

export default Macro
