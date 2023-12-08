import ProgressBar from 'react-progress-bar';

function MyComponent() {
	const [progress, setProgress] = useState(0);

	const handleUpload = (file) => {
		// Загрузка файла
		const xhr = new XMLHttpRequest();
		xhr.open('POST', '/upload');
		xhr.upload.addEventListener('progress', (event) => {
			const percent = (event.loaded / event.total) * 100;
			setProgress(percent);
		});
		xhr.send(file);
	};

	return (
		<div>
			<input type="file" onChange={(event) => handleUpload(event.target.files[0])} />
			<ProgressBar completed={progress} />
		</div>
	);
}
