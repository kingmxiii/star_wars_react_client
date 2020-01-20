import React from 'react'
import { Descriptions, Icon } from 'antd'

const Info = ({ character }) => (
	<div className="border p-2 bg-light">
		<Descriptions
			title={
				<div className="text-center">
					<Icon type="woman" style={{ fontSize: '24px' }} />
				</div>
			}>
			<Descriptions.Item label="Birth Year">
				{character.birth_year}
			</Descriptions.Item>
			<Descriptions.Item label="Height">{character.height}</Descriptions.Item>
			<Descriptions.Item label="Mass">{character.mass}</Descriptions.Item>
			<Descriptions.Item label="Hair Color">
				{character.hair_color}
			</Descriptions.Item>
			<Descriptions.Item label="Skin Color">
				{character.skin_color}
			</Descriptions.Item>
			<Descriptions.Item label="Eye Color">
				{character.eye_color}
			</Descriptions.Item>
		</Descriptions>
	</div>
)

export default Info
