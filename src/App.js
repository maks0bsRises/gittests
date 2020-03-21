import React, { Component } from 'react';
import Component1 from './Component1'
import Component2 from './Component2'
import Component4 from './Component4'
import Component3 from './Component3'


class App extends Component {
	render() {
		return (
			<div>
				<Component1 />
				<Component2 />
				<Component4 />
				<Component3 />
			</div>
		);
	}
}

export default App