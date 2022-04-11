import { Collection } from ".."
import Playlist, { PlaylistFolder } from "../structures/Audio"
import { FetchId } from "../types/id"
import BaseModule from "./BaseModule"

class Audio extends BaseModule {
    async fetchFolders(): Promise<Collection<string, PlaylistFolder>> {
        const result = await this.client.request("/audio/playlists")
        const folders = new Collection<string, PlaylistFolder>()
        result.forEach((folder) => {
            folders.set(folder.id.name, new PlaylistFolder(folder))
        })
        return folders
    }

    async fetchPlaylist(id: FetchId): Promise<Playlist> {
        const result = await this.client.request(`/audio/playlists/${id}`)
        return new Playlist(result)
    }
}

export default Audio
