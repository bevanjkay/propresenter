/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

const { writeFile } = require("fs/promises")
const ProPresenter = require("./dist/src")

const prop = new ProPresenter.Client({
    ip: "127.0.0.1",
    port: 1025,
    debug: true,
})

const run = async () => {
    const x = await prop.request("/audio/playlists")
    console.log(x)
}

run()
