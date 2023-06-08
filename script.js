(function () {
	const remainTimeText = document.getElementById('remainTimeText');
	let remainTime = 5;

	const intervalId = window.setInterval(function () {
		remainTimeText['textContent'] = String(--remainTime);
		
		if(remainTime === 0) {
			window.clearInterval(intervalId);
			window['location'].replace('https://github.com/isegye-dimigo');
		}
		
		return;
	}, 1000);

	return;
})();
