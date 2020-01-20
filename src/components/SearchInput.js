import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchInput = ({ value, onSearch, onChange }) => (
	<div className="mb-3">
		<div className="container">
			<Search
				type="text"
				placeholder="Search"
				value={value}
				onSearch={val => {
					if (val && val !== '') {
						onSearch(val)
					}
				}}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	</div>
)

export default SearchInput
