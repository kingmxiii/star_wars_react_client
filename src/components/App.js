import React, { Component, Fragment } from 'react'
import { fetchResults } from '../helpers/helper'
import Header from './Header'
import SearchInput from './SearchInput'
import Characters from './Characters'
import Footer from './Footer'
import Loadable from './Loadable'

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			people: [],
			currentPage: 1,
			total: 0,
			loading: true,
			searchTerm: ''
		}
	}

	componentDidMount() {
		this.fetchPeople()
	}

	fetchPeople = async () => {
		const { currentPage, searchTerm } = this.state
		let searchString = searchTerm === '' ? '' : `&search=${searchTerm}`
		let url = `${baseUrl}?page=${currentPage}${searchString}`
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

	//Handler to manage the Value of SearchInput
	onChange = searchTerm => {
		this.setState(
			{
				searchTerm
			},
			() => {
				if (this.state.searchTerm === '') {
					this.onSearch()
				}
			}
		)
	}

	//Handler that is called when user submit a search
	onSearch = () => {
		//When user submit the search, we set flags in the state and them we call the search function
		this.setState(
			{
				loading: true,
				people: [],
				currentPage: 1
			},
			() => {
				this.fetchPeople()
			}
		)
	}

	render() {
		const { people, currentPage, total, loading, searchTerm } = this.state
		return (
			<Fragment>
				<Header />
				<main role="main" className="containter-fluid flex-shrink-0">
					<SearchInput
						value={searchTerm}
						onSearch={this.onSearch}
						onChange={this.onChange}
					/>{' '}
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
