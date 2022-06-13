import { configureStore } from '@reduxjs/toolkit'
import { modal } from './domain'

import { loadState, saveState } from './persistence'

export const store = configureStore({
	reducer: {
		modal_1649879354: modal.reducer,
	},
	preloadedState: loadState(),
})

window.onbeforeunload = () => {
	saveState(store.getState())
}


export const SaveState = () => {
	saveState(store.getState())
}

export const Modal = modal.module
