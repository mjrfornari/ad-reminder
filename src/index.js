import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', function() {
	if (!Notification) {
		alert('Desktop notifications not available in your browser. Try Chromium.');
		return;
	}

	if (Notification.permission !== 'granted') Notification.requestPermission();
});

export function notifyMe() {
	if (Notification.permission !== 'granted') Notification.requestPermission();
	else {
		var notification = new Notification('HORA DO AD!!!!', {
			icon: 'https://ssl-static-tibia.akamaized.net/images/guildlogos/Robson_Jorge.gif',
			body: 'Hora de passar o AD denovo!'
		});

		notification.onclick = function() {
			window.focus();
		};
	}
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
