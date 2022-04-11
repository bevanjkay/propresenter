/* eslint-disable max-classes-per-file */
import {
    APIAudio, APIPlaylist, APIPlaylistFolder, MediaType, PlaylistFolderType,
} from "../types/audio"
import { Collection } from ".."

export class PlaylistFolder {
    uuid: string
    name: string
    index: number
    type: PlaylistFolderType
    // eslint-disable-next-line no-use-before-define
    children: PlaylistFolder[]
    constructor(playlistFolder: APIPlaylistFolder) {
        this.uuid = playlistFolder.id.uuid
        this.name = playlistFolder.id.name
        this.index = playlistFolder.id.index
        this.type = playlistFolder.type
        this.children = []
        playlistFolder.children.forEach((child) => {
            this.children.push(new PlaylistFolder(child))
        })
    }
}

export class Audio {
    uuid: string
    name: string
    index: number
    type: MediaType
    artist: string
    duration: number
    constructor(audio: APIAudio) {
        this.uuid = audio.id.uuid
        this.name = audio.id.name
        this.index = audio.id.index
        this.type = audio.type
        this.artist = audio.artist
        this.duration = audio.duration
    }
}

export default class Playlist {
    uuid: string
    name: string
    index: number
    items: Collection<string, Audio>
    constructor(playlist: APIPlaylist) {
        this.uuid = playlist.id.uuid
        this.name = playlist.id.name
        this.index = playlist.id.index
        this.items = new Collection<string, Audio>()
        playlist.items.forEach((item) => {
            this.items.set(item.id.name, new Audio(item))
        })
    }
}
