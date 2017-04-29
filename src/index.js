import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
	return (
		// JSX: allows using html	-- add js in {}
		// JSX: for css, it has to be "className". Simply "class" does not work
		<h2 className="text-center">
			{props.headerMessage}
		</h2>
	);
};

// props passed to React components have to be validated
App.propTypes = {
	headerMessage: React.PropTypes.string
}

// ReactDOM.render takes two arguments
ReactDOM.render(
	// ***what to render***
	<App headerMessage="Hello props!" />,
	// ***where to render***
	document.getElementById('root')
);
