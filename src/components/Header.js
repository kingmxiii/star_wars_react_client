import React from 'react'

const style = {
	backgroundColor: '#000'
}

const Header = () => (
	<header
		className="navbar navbar-expand-lg navbar-light mb-3 text-center d-flex justify-content-center"
		style={style}>
		<h4 className="text-white mb-0">Star Wars Characters</h4>
	</header>
)

export default Header
