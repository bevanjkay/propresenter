import Color from "./color"

type APIMacroId = {
    uuid: string
    name: string
    index: number
}
type APIMacro = {
    id: APIMacroId,
    color: Color
}

export default APIMacro
