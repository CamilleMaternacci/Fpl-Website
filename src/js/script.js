//burger menu

const menuNav = document.querySelector('.menu-links')
const burgerBtn = document.querySelector('.burger-btn')

const showMenu = () => {
	menuNav.classList.toggle('menu-active')
	burgerBtn.classList.toggle('burger-active')
}

burgerBtn.addEventListener('click', showMenu)

// scroll-spy

const links = document.querySelectorAll('.links')

links.forEach(link =>
	link.addEventListener('click', e => {
		const key = e.target.dataset.key

		const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 102

		menuNav.classList.remove('menu-active')
		burgerBtn.classList.remove('burger-active')

		window.scrollTo({ top: section, behavior: 'smooth' })
	})
)

// player change table

const clearOptionH4 = document.querySelector('.clear-option')
const unclearOptionH4 = document.querySelector('.unclear-option')
const firstTable = document.querySelector('.first-table')
const secondTable = document.querySelector('.second-table')
const changeTableBtn = document.querySelector('.change-table')

const changeTable = () => {
	secondTable.classList.toggle('active-table')
	unclearOptionH4.classList.toggle('active-h4')
	firstTable.classList.toggle('unactive-table')
	clearOptionH4.classList.toggle('unactive-h4')
}

changeTableBtn.addEventListener('click', changeTable)

// questionary

const firstOption = document.querySelector('#first')
const secondOption = document.querySelector('#second')
const thirdOption = document.querySelector('#third')
const fourthOption = document.querySelector('#fourth')
const fifthOption = document.querySelector('#fifth')
const sixthOption = document.querySelector('#sixth')
const voteBtn = document.querySelector('.btn-vote')
const voteSecondBtn = document.querySelector('.btn-vote-second')
const votePopup = document.querySelector('.vote-cast')
const voteSecondPopup = document.querySelector('.vote-cast-second')

const allOption = [firstOption, secondOption, thirdOption, fourthOption, fifthOption, sixthOption]

const showFirstPopup = () => {
	allOption.forEach(option => {
		if(option.checked = true) {
			votePopup.style.display = 'block'
		}
	})
}

const showSecondPopup = () => {
	allOption.forEach(option => {
		if(option.checked = true) {
			voteSecondPopup.style.display = 'block'
		}
	})
}

voteBtn.addEventListener('click', showFirstPopup)
voteSecondBtn.addEventListener('click', showSecondPopup)

// contact-form

const nameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const checkBox = document.querySelector('.checkbox')
const checkBoxInput = document.querySelector('#checkbox')
const sendBtnMsg = document.querySelector('.send-btn')
const clearBtnMsg = document.querySelector('.clear-btn')
const errorEmail = document.querySelector('.error-email')
const errorMsg = document.querySelector('.error-msg')
const popupMsg = document.querySelector('.popup-sended-msg')

const allInputs = [nameInput, surnameInput, emailInput, messageInput]

const showError = input => {
	const inputBox = input
	inputBox.classList.add('error-input')
}

const closeError = input => {
	const inputBox = input
	inputBox.classList.remove('error-input')
}

const clearAllForm = () => {
	allInputs.forEach(input => {
		input.value = ''
		closeError(input)
		errorEmail.style.display = 'none'
		errorMsg.textContent = ''
		checkBoxInput.checked = false
		checkBox.classList.remove('error-checkbox')
	})
}

const checkInputs = () => {
	allInputs.forEach(input => {
		if (input.value == '') {
			showError(input)
		} else {
			closeError(input)
			errorEmail.style.display = 'none'
			errorMsg.textContent = ''
		}
	})
}

const checkEmail = email => {
	const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
	if (re.test(email.value)) {
		closeError(email)
		errorEmail.style.display = 'none'
	} else {
		showError(email)
		errorEmail.style.display = 'block'
	}
}

const checkMsgLength = (msg, min) => {
	if (msg.value.length < min) {
		showError(msg)
		errorMsg.textContent = `Wiadomość musi zawierać min. ${min} znaków.`
	} else {
		closeError(msg)
		errorMsg.textContent = ''
	}
}

const checkCheckbox = () => {
	if (checkBoxInput.checked == false) {
		checkBox.classList.add('error-checkbox')
	} else {
		checkBox.classList.remove('error-checkbox')
	}
}

const checkErrors = () => {
	let errorCount = 0

	allInputs.forEach(input => {
		if (input.classList.contains('error-input') || checkBoxInput.checked == false) {
			errorCount++
		}
	})

	if (errorCount == 0) {
		showPopup()
		setTimeout(clearAllForm, 7000)
	}
}

const showPopup = () => {
	popupMsg.style.display = 'block'
}

sendBtnMsg.addEventListener('click', e => {
	e.preventDefault()
	checkInputs(allInputs)
	checkEmail(email)
	checkMsgLength(messageInput, 10)
	checkCheckbox()
	checkErrors()
})

clearBtnMsg.addEventListener('click', e => {
	e.preventDefault()
	clearAllForm(allInputs)
})
// current year

const footerYear = document.querySelector('.year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

// cookies alert

const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
