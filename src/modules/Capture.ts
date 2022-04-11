import CaptureSettings, { CaptureStatus } from "../structures/Capture"
import BaseModule from "./BaseModule"

class Capture extends BaseModule {
    async getStatus(): Promise<CaptureStatus> {
        const result = await this.client.request("/capture/status")
        return new CaptureStatus(result)
    }

    async getSettings(): Promise<CaptureSettings> {
        const result = await this.client.request("/capture/settings")
        return new CaptureSettings(result)
    }

    async start() {
        await this.client.request("/capture/start")
        return true
    }

    async stop() {
        await this.client.request("/capture/stop")
        return true
    }
}

export default Capture
