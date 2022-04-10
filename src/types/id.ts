export type APIId = {
    uuid: string
    name: string
    index: number
}

/**
 * @remarks This is what is used in several parts of the API to fetch by either UUID, name, or by index
 */
export type FetchId = string | number
