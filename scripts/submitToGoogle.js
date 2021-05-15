const scriptURL =
	'https://script.google.com/macros/s/AKfycbyFnLarEunulys6AzPJJR_ddQ66u3-9lbdp4Pfk9sVJ9s9Mbg/exec';
const bookRequest = document.forms['submit-to-google-sheet'];
const subscriber = document.forms['newsletterSubscriber'];

bookRequest.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(bookRequest) })
		.then((response) => console.log('Success!', response))
		.catch((error) => console.error('Error!', error.message));
});

subscriber.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(subscriber) })
		.then((response) => console.log('Success!', response))
		.catch((error) => console.error('Error!', error.message));
});
