/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

const ProPresenter = require("./dist/src")

const prop = new ProPresenter.Client({
    ip: "127.0.0.1",
    port: 1025,
    debug: true,
})
prop.on("slideChange", (slides) => {
    console.log(slides)
})

const run = async () => {
    const x = await prop.slides.subscribe()
    console.log(x)

    let num = 0
    // eslint-disable-next-line no-constant-condition
    while (true) {
        num += 1
    }
}

run()
