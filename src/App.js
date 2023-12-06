import React from 'react';
// import './app.css';
import HeaderFC from './components/Header.js';
import SidebarFC from './components/aside/Sidebar.js';
import MainFC from './components/main/Main.js'
const App = (props) => {
	return (
		<>
			<HeaderFC />
			<div className='content pt-6 flex'>
				<SidebarFC />
				<MainFC />
			</div>
		</>
	);
};
export default App;
