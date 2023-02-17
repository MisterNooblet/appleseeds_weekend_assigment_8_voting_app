const LSM = {
    push(item, data) {
        localStorage.setItem(item, JSON.stringify(data))
    },
    pull(item) {
        return JSON.parse(localStorage.getItem(item))
    },
    remove(item) {
        localStorage.removeItem(item)
    },
    updateVotes(name) {
        let votes = this.pull('parties')
        // eslint-disable-next-line
        const result = votes.map(element => element.name === name ? { ...element, ['votes']: element['votes'] + 1 } : element)
        this.push('parties', result)
        return result
    },
    logout() {
        const users = this.pull('users')
        const currentUser = this.pull('user')
        // eslint-disable-next-line
        const result = users.map(element => element.name === currentUser.name ? { ...element, ['voted']: currentUser['voted'] } : element)
        this.push('users', result)
        this.remove('tempvote')
        this.remove('user')
    }

}
export default LSM