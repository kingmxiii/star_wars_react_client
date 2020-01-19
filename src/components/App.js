import React, { Component } from 'react'
import { fetchResults } from '../helpers/helper'
import Characters from './Characters'

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { people: [], currentPage: 1, total: 0 }
	}

	componentDidMount() {
		this.fetchPeople()
	}

	fetchPeople = async () => {
		const { currentPage } = this.state
		let url = `${baseUrl}?page=${currentPage}`
		let res = await fetchResults(url)
		if (res !== null) {
			this.setState({ people: res.data.results, total: res.data.count })
		}
	}

	onPageChange = (currentPage, sizePerPage) => {
		this.setState(
			{
				loading: true,
				currentPage
			},
			this.fetchPeople
		)
	}

	render() {
		const { people, currentPage, total } = this.state
		return (
			<main role="main">
				<Characters
					people={people}
					current={currentPage}
					total={total}
					onPageChange={this.onPageChange}
				/>
			</main>
		)
	}
}

export default App
