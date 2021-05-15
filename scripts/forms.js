// Request form modal close and toast alert
document.getElementById('requestForm').addEventListener('submit', function () {
	document.getElementById('bookTittleInput').value = '';
	document.getElementById('authorNameInput').value = '';
	document.getElementById('emailInput').value = '';
	document.getElementById('cancelRequest').click();

	var toastElList = [].slice.call(document.querySelectorAll('.toast'));
	var toastList = toastElList.map(function (toastEl) {
		// Creates an array of toasts (it only initializes them)
		return new bootstrap.Toast(toastEl); // No need for options; use the default options
	});
	toastList.forEach((toast) => toast.show()); // This show them
});

// Subscriber Toast Alert
document
	.getElementById('subscriberForm')
	.addEventListener('submit', function () {
		document.getElementById('subscriberInput').value = '';
	});