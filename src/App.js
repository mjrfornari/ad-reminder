import React, { Component } from 'react';
import RobsonJorge from './Robson_Jorge.gif';
import { notifyMe } from './index';
import './App.css';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			time_min: 30,
			time_sec: 0,
			pular: 0,
			ad: false
		};
		this.calcTime = this.calcTime.bind(this);
		this.setAd = this.setAd.bind(this);
		this.showNotifications = this.showNotifications.bind(this);
	}

	componentDidMount() {
		setInterval(() => {
			this.calcTime();
		}, 1000);
	}

	showNotifications() {
		notifyMe();
	}

	calcTime() {
		var date = new Date();
		var min = date.getMinutes(); // 0-59
		var sec = date.getSeconds(); // 0-59
		var time_min = 30;
		var time_sec = 0;
		var mincalc = min > 30 ? min - 30 : min;
		time_min = 30 - mincalc - (sec >= 1 ? 1 : 0);
		time_sec = sec >= 1 ? 60 - sec : 0;
		var ad = this.state.ad;
		console.log(time_min, time_sec);
		if (time_min === 0 && time_sec === 1) {
			ad = false;
			this.showNotifications();
		}
		this.setState({ time_min: time_min, time_sec: time_sec, ad: ad });
	}

	setAd(e) {
		e.preventDefault();
		var date = new Date();
		var hour = date.getHours();
		var min = date.getMinutes();
		this.setState({
			ad: true,
			lastAd: hour + ':' + (min >= 10 ? String(min) : '0' + String(min))
		});
	}

	render() {
		return (
			<div className="App">
				<div className="Menu">
					<div className="Menu_text">Próximo AD</div>
					<div style={{ display: 'block' }}>
						<div className="Counter">
							<div className="Counter_text" style={{ color: this.state.ad ? 'red' : 'green' }}>
								{String(this.state.time_min) +
									':' +
									(this.state.time_sec >= 10
										? String(this.state.time_sec)
										: '0' + String(this.state.time_sec))}
							</div>
						</div>
					</div>
					<div className="LastAd_text">Último AD passado: {this.state.lastAd}</div>
					<button className="Button_ad" onClick={this.setAd}>
						Passar AD!
					</button>
				</div>
				<a href="https://www.twitch.tv/spihuken" target="_blank" rel="noopener noreferrer">
					<div className="Credits">
						<img src={RobsonJorge} alt="RobsonJorge" className="Credits_img" />
						<p className="Credits_text">MADE BY SPIHUKEN</p>
					</div>
				</a>
			</div>
		);
	}
}

export default App;
