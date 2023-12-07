import React from 'react';
// import './app.css';
import HeaderFC from './components/Header.js';
import SidebarFC from './components/aside/Sidebar.js';
import MainFC from './components/main/Main.js'
import FooterFC from './components/footer/footer.js';
import ModelFC from './components/modal_window/Modal.js';

const App = (props) => {
	return (
		<>
			<HeaderFC /> 
			<ModelFC /> {/* Модальное окнок "Покупка акций"*/}
			<div className='content pt-6 flex'>
				<SidebarFC />
				<MainFC />
				<FooterFC />
			</div>
		</>
	);
};
export default App;
