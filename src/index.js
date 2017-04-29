import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// ReactDOM.render takes two arguments
ReactDOM.render(
	// ***what to render***
	<App headerMessage="Hello props!" />,
	// ***where to render***
	document.getElementById('root')
);
