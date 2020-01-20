import React, { Component, Fragment } from 'react'
import { fetchResults } from '../helpers/helper'
import Header from './Header'
import Characters from './Characters'
import Footer from './Footer'
import Loadable from './Loadable'

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { people: [], currentPage: 1, total: 0, loading: true }
	}

	componentDidMount() {
		this.fetchPeople()
	}

	fetchPeople = async () => {
		const { currentPage } = this.state
		let url = `${baseUrl}?page=${currentPage}`
		let res = await fetchResults(url)
		if (res !== null) {
			this.setState({
				people: res.data.results,
				total: res.data.count,
				loading: false
			})
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
		const { people, currentPage, total, loading } = this.state
		return (
			<Fragment>
				<Header />
				<main role="main" className="flex-shrink-0">
					<Loadable loading={loading}>
						<Characters
							people={people}
							current={currentPage}
							total={total}
							onPageChange={this.onPageChange}
						/>
					</Loadable>
				</main>
				<Footer />
			</Fragment>
		)
	}
}

export default App
