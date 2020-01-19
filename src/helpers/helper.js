import axios from 'axios'

export const fetchResults = async (searchTerm, page) => {
	let options = {
		url: `https://swapi.co/api/people/`,
		method: 'get'
	}

	let res = []
	try {
		res = await axios(options)
	} catch (err) {
		console.log('ERROR FETCHING')
		return null
	}

	return res
}
