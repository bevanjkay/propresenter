import { APIId } from "./id"

export type MediaType = "audio" | "video" | "image"
export type PlaylistFolderType = "playlist" | "folder"

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
    type: PlaylistFolderType
    children: APIPlaylistFolder[]
}
