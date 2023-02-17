const LSM = {
    push(item, data) {
        localStorage.setItem(item, JSON.stringify(data))
    },
    pull(item) {
        return JSON.parse(localStorage.getItem(item))
    }
}
export default LSM