const _reducers = {
    OPEN_MENU: (state) => {
        state.modal.visible = true
    },
    CLOSE_MENU: (state) => {
        state.modal.visible = false
    },
    setExpandedLock: (state, expanded) => {
        state.modal.expanded = expanded
    },
    setUsers: (state, users) => {
        state.modal.users = users
    }
}
export default _reducers
