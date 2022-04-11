import BaseModule from "../../dist/src/modules/BaseModule"
import AnnouncementStatus from "../structures/AnnouncementStatus"

class Announcements extends BaseModule {
    async getStatus() {
        const result = await this.client.request("/announcement/active/timeline")
        return new AnnouncementStatus(result)
    }

    async start() {
        await this.client.request("/announcement/active/timeline/start")
        return true
    }

    async pause() {
        await this.client.request("/announcement/active/timeline/pause")
        return true
    }

    async rewind() {
        await this.client.request("/announcement/active/timeline/rewind")
        return true
    }
}

export default Announcements
