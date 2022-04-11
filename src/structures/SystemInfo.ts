import APISystemInfo, { SystemPlatform } from "../types/systeminfo"

class SystemInfo {
    name: string
    platform: SystemPlatform
    osVersion: string
    hostDescription: string
    apiVersion: string

    constructor(info: APISystemInfo) {
        this.name = info.name
        this.platform = info.platform
        this.osVersion = info.os_version
        this.hostDescription = info.host_description
        this.apiVersion = info.api_version
    }
}

export default SystemInfo
