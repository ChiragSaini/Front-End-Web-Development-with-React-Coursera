import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// * App turned into functional component form Class component.
function App() {
	const store = ConfigureStore();
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Main />
				</div >
			</BrowserRouter>
		</Provider>
	);
}

export default App;