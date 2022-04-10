import updateNotifier from "update-notifier"
import packageJson from "../package.json"

updateNotifier({ pkg: packageJson }).notify()

export { version } from "../package.json"

export { default as Collection } from "./util/Collection"
export { default as Client } from "./client/Client"
export { default as Macros } from "./modules/Macros"
export { default as Props } from "./modules/Props"
export { default as Subscriptions } from "./modules/Subscriptions"

export { default as allStreamingEndpoints } from "./util/AllStreamingEndpoints"

/*
Hi, welcome to looking in my code.
Any questions? Shoot me a message on Discord: https://inv.wtf/shadow
or just shoot me
that too
*/
