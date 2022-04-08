/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

const ProPresenter = require("./dist/src")

const prop = new ProPresenter.Client({ ip: "127.0.0.1", port: 1025, requestDebug: true })

const run = async () => {
    const x = await prop.macros.fetchAll()
    console.log(x)

    const macroByIndex = await prop.macros.fetch(x.first().index)
    const macroByName = await prop.macros.fetch(x.first().name)
    const macroByUUID = await prop.macros.fetch(x.first().uuid)

    console.log(macroByIndex, macroByName, macroByUUID)

    const trigger = await prop.macros.trigger(x.first().uuid)
    console.log(trigger)

    const newName = await prop.macros.setName(x.first().uuid, "New Name")
    console.log(newName)

    const color = await prop.macros.setColor(x.first().uuid, {
        red: 255, green: 0, blue: 0, alpha: 1,
    })
    console.log(color)
}

run()
