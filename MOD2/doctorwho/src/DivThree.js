import React from 'react';

class DivThree extends React.Component{
    state = {
		tardis:{
			name: 'Time and Relative Dimension in Space',
			caps: false
		}
	}

	changeIt = (text) => {
		if (this.state.tardis.caps) {
			this.setState({
				tardis: {
					name: text.toLowerCase(),
					caps: false
				}
			});
		} else {
			this.setState({
				tardis: {
					name: text.toUpperCase(),
					caps: true
				}
			});
		}
	}

	render() {
		let text = this.state.tardis.name;
		return(
			<div >
				<h3 onClick={() => this.changeIt(text)}> {this.state.tardis.name} </h3>
			</div>
			)
	}
}

export default DivThree;
