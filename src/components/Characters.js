import React from 'react'
import { List } from 'antd'
import Info from './Info'

//Component that list all characters stored in the Application state
const Characters = ({ people, current, total, onPageChange }) => {
	//Build pagination object or parameters
	let pagination = {
		pageSize: 10,
		simple: true,
		total,
		current,
		onChange: onPageChange,
		showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
	}

	return (
		<div className="container pb-5 mb-5 characters-container">
			<h4>Characters [{total}]</h4>
			<List
				dataSource={people}
				bordered
				size="small"
				itemLayout="vertical"
				pagination={pagination}
				renderItem={item => (
					<List.Item>
						<h5>{item.name}</h5>
						<Info character={item} />
					</List.Item>
				)}
			/>
		</div>
	)
}

export default Characters
