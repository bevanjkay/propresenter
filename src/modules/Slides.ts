import Slide from "../structures/Slide"
import BaseModule from "./BaseModule"

class Slides extends BaseModule {
    async fetchCurrent() {
        const result = await this.client.request("/status/slide")
        return new Slide(result)
    }

    async subscribe() {
        await this.client.streamHandler.start("/status/slide", "slideChange")
        return true
    }
}

export default Slides
