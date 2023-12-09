// import { useState } from "react";
import React, { useState } from "react";

export default function MyTimeFC() {
	const [time, setTime] = useState(new Date());
	const currentDate = new Date().toLocaleDateString();
	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const hours = time.getHours().toString().padStart(2, '0');
	const minutes = time.getMinutes().toString().padStart(2, '0');
	const seconds = time.getSeconds().toString().padStart(2, '0');

	return (
		<>

			{hours}_{minutes}_{seconds}_{currentDate}

		</>
	);
}