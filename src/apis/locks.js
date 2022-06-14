import axios from 'axios'
export const API_URL = 'http://127.0.0.1:3001'

//APIS
export const getAllLocks = async () => {
	const url = `${API_URL}/locks`
	return axios.get(url)
}

export const getSingleLock = async (id) => {
	const url = `${API_URL}/locks/${id}`
	return axios.get(url)
}

export const createLock = async (data) => {
	const url = `${API_URL}/locks`
	return axios.post(url, data)
}

export const addUserToLock = async (lock_id, user_id) => {
	const url = `${API_URL}/locks/${lock_id}/addUser`
    const data = { userId: user_id }
	console.log("url: ", url)
	return axios.post(url, data)
}

export const removeUserFromLock = async (lock_id, user_id) => {
	const url = `${API_URL}/locks/${lock_id}/removeUser`
    const data = { userId: user_id }
	return axios.post(url, data)
}

export const activeLockStatus = async (lock_id) => {
	const url = `${API_URL}/locks/${lock_id}/status`
    const data = { status: "active" }
	return axios.patch(url, data)
}
export const passiveLockStatus = async (lock_id) => {
	const url = `${API_URL}/locks/${lock_id}/status`
    const data = { status: "passive" }
	return axios.patch(url, data)
}