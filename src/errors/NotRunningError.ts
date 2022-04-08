class NotRunningError extends Error {
    constructor() {
        super()
        this.message = "A running instance of ProPresenter could not be found or did not respond correctly on your selected port."
    }
}

export default NotRunningError
