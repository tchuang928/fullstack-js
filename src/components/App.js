import React from 'react';

import Header from './Header';

// extend React.Component to add states aka dynamic
class App extends React.Component {
	state = {
		pageHeader: 'Naming Contests' 
	};

	render() {
		return (
			// JSX: allows using html	-- add js in {}
			// JSX: for css, it has to be "className". Simply "class" does not work
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					---
				</div>
			</div>
		);
	}
};

export default App;
