let openNavBtn = document.getElementById('openNavBtn')
let navMenu = document.getElementById('navMenuBar')
let closeNavBtn = document.getElementById('closeNavBtn')

openNavBtn.addEventListener('click', openNavMenu)

function openNavMenu() {
	event.preventDefault()
	navMenu.style.marginLeft = '0'
	console.log("Opening Navigation")	
	// return false;
}

closeNavBtn.addEventListener('click', closeNavMenu)

function closeNavMenu() {
	event.preventDefault()
	navMenu.style.marginLeft = '-15rem'
	console.log("Closing Navigation")
}


