import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// * App turned into functional component form Class component.
function App() {
	return (
		<BrowserRouter>
			<div>
				<Main />
			</div >
		</BrowserRouter>
	);
}

export default App;