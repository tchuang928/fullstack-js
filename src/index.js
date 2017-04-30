import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import data from './testData';

// ReactDOM.render takes two arguments
ReactDOM.render(
	// ***what to render***
	<App contests={data.contests} />,
	// ***where to render***
	document.getElementById('root')
);
