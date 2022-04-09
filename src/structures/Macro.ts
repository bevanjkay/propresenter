import Color from "../types/color"
import APIMacro from "../types/macro"

class Macro {
    uuid: string
    name: string
    index: number
    color: Color

    constructor(macro: APIMacro) {
        this.uuid = macro.id.uuid
        this.name = macro.id.name
        this.index = macro.id.index
        this.color = macro.color
    }
}

export default Macro
