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
			<div className="App">
				<h1>Hello</h1>
				<Characters people={this.state.people} />
				<span>{this.state.people.length}</span>
			</div>
		)
	}
}

export default App
