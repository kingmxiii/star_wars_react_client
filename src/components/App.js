import React, { Component } from 'react'
import { fetchResults } from '../helpers/helper'
import Characters from './Characters'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { people: [] }
	}

	componentDidMount() {
		this.fetchPeople()
	}

	fetchPeople = async () => {
		let res = await fetchResults()
		if (res !== null) {
			this.setState({ people: res.data.results })
		}
	}

	render() {
		return (
			<main role="main">
				<Characters people={this.state.people} />
			</main>
		)
	}
}

export default App
