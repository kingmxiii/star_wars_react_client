import axios from 'axios'

//Helper function that make get request to specified url
export const fetchResults = async url => {
	let options = {
		url,
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
