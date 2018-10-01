import React, {Component} from 'react'
import './app.css'

// export default class App extends Component {

// 	render () {
// 		return(
// 			<div>
// 				<div>
// 					Remaining Time from November 07, 2018:
// 				</div>
// 				<div>
// 					Days: 1
// 					Hours: 2 
// 					Minutes: 12
// 					Seconds: 23
// 				</div>
// 			</div>
// 			)
// 	}
// }

// export default App;

export default class App extends Component {
	
	constructor(props) {
		super(props)
		const time = Date.parse('November 07 2018') - Date.parse(new Date);
		const seconds = Math.floor((time/1000) % 60)
		const minutes = Math.floor((time/1000/60) % 60)
		const hours = Math.floor((time/1000/60/60) % 24)
		const days = Math.floor((time/1000/60/60/24))

		this.state = {
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		}
	}

	componentDidMount() {
		this.timeId = setInterval(()=>this.gettime(),1000);
		// this.
	}

	componentWillUnmount() {
		clearInterval(this.timeId);
	}

	gettime() {
		const time = Date.parse('November 07 2018') - Date.parse(new Date);
		const seconds = Math.floor((time/1000) % 60)
		const minutes = Math.floor((time/1000/60) % 60)
		const hours = Math.floor((time/1000/60/60) % 24)
		const days = Math.floor((time/1000/60/60/24))

		this.setState({
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		});	
	}

	render (){
		return(
			<div className='clock-div'>
				<div className='input-field'>
					<small className='input-name'>Enter Occasion Date (dd/mm/yyyy)</small>: <input class='input-tag input' type='text' name='occasion' placeholder='Enter Date'/>&nbsp;
					<input class='input-tag submit' type='submit' value='Submit' />
				</div>
				<hr />
				<div className='clock-div left-time'>
					Remaining Time from November 07, 2018:
				</div>
				<hr />
				<div className='clock-div time-block'>
					<p class='interior-block'>&nbsp;{this.state.days} Days | </p>
					<p class='interior-block'>{this.state.hours} Hours | </p>
					<p class='interior-block'>{this.state.minutes} Minutes | </p>
					<p class='interior-block'>{this.state.seconds} Seconds</p>
				</div>
			</div>
		);
	}
}
