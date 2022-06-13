import axios from 'axios'
export const API_URL = 'http://127.0.0.1:3001'

//APIS
export const getAllUsers = async () => {
	const url = `${API_URL}/customers`
	return axios.get(url)
}

export const getSingleUser = async (id) => {
	const url = `${API_URL}/customers/${id}`
	return axios.get(url)
}

export const createUser = async (data) => {
	const url = `${API_URL}/customers`
	return axios.post(url, data)
}

export const getLocksOfUser = async (id) => {
	const url = `${API_URL}/customers/${id}/locks`
	return axios.get(url)
}

