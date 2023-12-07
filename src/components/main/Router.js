import React, { useState } from 'react';

function App() {
	const [selectedLink, setSelectedLink] = useState('home');

	const handleLinkClick = (link) => {
		setSelectedLink(link);
	};

	return (
		<div>
			<nav>
				<ul>
					<li>
						<a onClick={() => handleLinkClick('home')} href="#">Home</a>
					</li>
					<li>
						<a onClick={() => handleLinkClick('about')} href="#">About</a>
					</li>
				</ul>
			</nav>

			<main>
				{selectedLink === 'home' && <h1>Home Page</h1>}
				{selectedLink === 'about' && <h1>About Page</h1>}
			</main>
		</div>
	);
}

export default App;
