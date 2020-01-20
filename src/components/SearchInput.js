import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchInput = ({ value, onSearch, onChange }) => (
	<div className="row mb-3">
		<div className="container">
			<div>
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
	</div>
)

export default SearchInput
