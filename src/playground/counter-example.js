class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	handleAddOne = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	handleMinusOne = () => {
		this.setState((prevState) => (
			{ count: prevState.count - 1 }
		));
	}

	handleReset = () => {
		this.setState(() => ({ count: 0 }));
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}


ReactDOM.render(<Counter />, document.getElementById("app"));