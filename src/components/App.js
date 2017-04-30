import React from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';

// extend React.Component to add states aka dynamic
class App extends React.Component {
	state = {
		pageHeader: 'Naming Contests' 
	};

	// React lifecycle methods
	// This is called after component has been rendered
	componentDidMount() {

	}

	// This is called before component is going to be unmounted
	componentWillUnmount() {

	}

	render() {
		return (
			// JSX: allows using html	-- add js in {}
			// JSX: for css, it has to be "className". Simply "class" does not work
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					{this.props.contests.map(contest => 
						<ContestPreview {...contest} />
					)}
				</div>
			</div>
		);
	}
};

export default App;
