import React from 'react';
import ReactDOM from 'react-dom';
import ReadingTime from '../src/reading-time';

class ReactReadingTime extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React  Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React Aprendendo React '
		};
	}

	updateText(event) {
		this.setState({ text: event.target.value });
	}

	render() {
		return (
			<div className = 'container' style={{ marginTop : '50px' }}>
				<div className='col-lg-8 col-lg-offset-2 form-group'>
					<textarea
						value={this.state.text}
						onChange={::this.updateText}
						className='form-control'
						style={{ height : '500px', resize : 'none' }} >
					</textarea>
				</div>
				<ReadingTime text = {this.state.text} className='col-lg-2 well'/>
			</div>
		);
	}
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));