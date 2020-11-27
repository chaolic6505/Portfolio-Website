export const EMAIL = () => {
	const onClick = () => {
		window.location.href = 'mailto:chaolic6505@gmail.com';
	};
	return <button onClick={onClick}>EmailButton</button>;
};
