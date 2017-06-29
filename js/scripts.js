var link = document.querySelector(".contacts-feedback-open");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close-button");
var userName = popup.querySelector("[name=name");
var userEmail = popup.querySelector("[name=email]");
var userText = popup.querySelector("[name=text]");
var form = popup.querySelector("form");
var storageName = localStorage.getItem("user_name");
var storageEmail = localStorage.getItem("user_email");

if (link) {
	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("feedback-show");
		userName.focus();

		if (storage_name) {
			userName.value = storageName;
			userEmail.focus();
		}

		if (storage_email) {
			userEmail.value = storageEmail;
			userName.focus();
		}

		if (storage_name && storageEmail) {
			userText.focus();
		}
	});
}

if (close) {
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("feedback-show");
		popup.classList.remove("feedback-error");
	});
}

form.addEventListener("submit", function(event) {
	if (!userName.value || !userEmail.value || !userText.value) {
		event.preventDefault();
		popup.classList.remove("feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("feedback-error");
		userName.focus();

		if (storage_name) {
			userName.value = storageName;
			userEmail.focus();
		}

		if (storage_email) {
			userEmail.value = storageEmail;
			user_name.focus();
		}

		if (storageName && storageEmail) {
			userText.focus();
		}
	}

	else {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("userEmail", userEmail.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-show")) {
			popup.classList.remove("feedback-show");
			popup.classList.remove("feedback-error");
		}
	}
})