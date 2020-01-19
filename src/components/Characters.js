import React from 'react'
import { List, Avatar } from 'antd'

const Characters = ({ people, current, total, onPageChange }) => {
	let pagination = {
		pageSize: 10,
		total,
		current,
		onChange: onPageChange,
		showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
	}

	return (
		<div className="container">
			<h1>Result</h1>
			<List
				dataSource={people}
				bordered
				itemLayout="vertical"
				pagination={pagination}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta title={<span>{item.name}</span>} />
					</List.Item>
				)}
			/>
		</div>
	)
}

export default Characters
