/* eslint-disable max-classes-per-file */
import { APISlideStatus, APISlideData } from "../types/slide"

class Slide {
    text: string
    notes: string
    uuid: string

    constructor(data: APISlideData) {
        this.text = data.text
        this.notes = data.notes
        this.uuid = data.uuid
    }
}

class SlideStatus {
    current: Slide
    next: Slide

    constructor(data: APISlideStatus) {
        this.current = new Slide(data.current)
        this.next = new Slide(data.next)
    }
}

export default SlideStatus
