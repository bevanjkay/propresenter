import { APIId } from "./id"

export type MediaType = "audio" | "video" | "image"

export type APIAudio = {
    id: APIId
    type: MediaType
    artist: string
    duration: number
}

export type APIPlaylist = {
    id: APIId
    items: APIAudio[]
}

export type APIPlaylistFolder = {
    id: APIId
    type: "playlist" | "folder"
    children: APIPlaylistFolder[]
}
