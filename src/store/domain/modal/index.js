import { createSlice } from '@reduxjs/toolkit'

import initialState from './initial'
import reducers from './reducers'
import selectors from './selectors'

const _modalSlice = createSlice({ name: 'modal1', initialState, reducers })
_modalSlice.selectors = selectors

_modalSlice.module = {
    selectors,
    actions: {
        openMenu: _modalSlice.actions.OPEN_MENU,
        closeMenu: _modalSlice.actions.CLOSE_MENU,
        setUsers: _modalSlice.actions.setUsers
    }
}

export default _modalSlice
