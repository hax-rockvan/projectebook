// Request form modal close and toast alert
document.getElementById('requestForm').addEventListener('submit', function () {
	document.getElementById('bookTittleInput').value = '';
	document.getElementById('authorNameInput').value = '';
	document.getElementById('emailInput').value = '';
	document.getElementById('cancelRequest').click();

	var myAlert = document.getElementById('bookRequestToast'); //select id of toast
	var bsAlert = new bootstrap.Toast(myAlert); //inizialize it
	bsAlert.show(); //show it
});

// Subscriber Toast Alert
document
	.getElementById('subscriberForm')
	.addEventListener('submit', function () {
		document.getElementById('subscriberInput').value = '';
		var myAlert = document.getElementById('newsletterToast'); //select id of toast
		var bsAlert = new bootstrap.Toast(myAlert); //inizialize it
		bsAlert.show(); //show it
	});
