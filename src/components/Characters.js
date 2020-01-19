import React from 'react'
import { List, Avatar } from 'antd'

const Characters = ({ people }) => {
	return (
		<div className="container">
			<h1>Result</h1>
			<List
				dataSource={people}
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
