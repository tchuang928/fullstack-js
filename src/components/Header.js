import React from 'react';

const Header = ({message}) => {
	return (
		<h2 className="Header text-center">
			{message}
		</h2>
	);
};

// props passed to React components have to be validated
Header.propTypes = {
	message: React.PropTypes.string
};

Header.defaultProps = {
	message: 'Default Header'
};

export default Header;
