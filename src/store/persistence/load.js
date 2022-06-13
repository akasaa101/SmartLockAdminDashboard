import modalState from '../domain/modal/initial'

const _loadState = () => {
	try {
		const state = JSON.parse(localStorage.getItem('state'))
		state.modal = { ...modalState, ...state.modal }
		return state
	} catch (err) {
		return undefined
	}
}
export default _loadState
