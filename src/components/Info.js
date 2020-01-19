import React from 'react'
import { Descriptions } from 'antd'

const Info = ({ character }) => (
	<Descriptions title="Info">
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
)

export default Info
