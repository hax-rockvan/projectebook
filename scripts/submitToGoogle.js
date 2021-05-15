const scriptURL =
	'https://script.google.com/macros/s/AKfycbwYca2kyLOAkAcubjqG4mtvmxCIRRaJsaKl4GA-8y2G85HSUxo/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then((response) => console.log('Success!', response))
		.catch((error) => console.error('Error!', error.message));
});
