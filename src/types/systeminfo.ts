export type SystemPlatform = "win" | "mac" | "unknown"

type APISystemInfo = {
    name: string
    platform: SystemPlatform
    os_version: string
    host_description: string
    api_version: string
}

export default APISystemInfo
