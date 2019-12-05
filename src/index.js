import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// import for FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faHeartbeat, faInfoCircle, faList, faMars, faVenus, faBackward,
		 faForward, faUndo, faComments, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faPlayCircle, faHeartbeat, faInfoCircle, faList, faMars, faVenus, faBackward,
		 	faForward, faUndo, faComments, faPaperPlane, faSpinner)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
