const emailInput = document.querySelector('#email-input')
const passInput = document.querySelector('#pass-input')
const inputSubmit = document.querySelector('#submit-input')
const form = document.querySelector('.form')

const checkMail = () => {
	let valid = false

	const emailValue = emailInput.value.trim()

	if (isEmpty(emailValue)) {
		showError(emailInput, '*El email es obligatorio')
	} else if (!isMailValid(emailValue)) {
		showError(emailInput, '*El email no es válido')
	} else {
		showSuccess(emailInput)
		valid = true
	}
	return valid
}

const checkPass = () => {
	let valid = false

	const passValue = passInput.value.trim()

	if(isEmpty(passValue)) {
		showError(passInput, '*La contraseña es obligatoria')
	} else if(!isPasswordSecure(passValue)) {
		showError(passInput, '*La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo')
	} else {
		showSuccess(passInput)
		valid = true
	}
	return valid
}

const showError = (input, msg) => {
	const formField = input.parentElement
	
	const error = formField.querySelector('small')
	error.textContent = msg
}

const showSuccess = (input) => {
	const formField = input.parentElement

	const error = formField.querySelector('small')
	error.textContent = ''
}

const isEmpty = (value) => value === ''

const isMailValid = (mail) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	return re.test(mail)
}

const isPasswordSecure = (password) => {
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
	return re.test(password)
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	if(checkMail() && checkPass()) {
		location.href = "index.html"
	}
})


