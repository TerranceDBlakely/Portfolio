// Navigation Script 
let navMenuBar = document.getElementById('navMenuBar')
let openNavBtn = document.getElementById('openNavBtn')
let closeNavBtn = document.getElementById('closeNavBtn')
let pageContainer = document.getElementById('pageContainer')


navMenuBar.style.marginLeft = '-25rem'


openNavBtn.addEventListener('click', openNavigationBar, false)

function openNavigationBar() {
	navMenuBar.style.marginLeft = '0'
	event.preventDefault()
	pageContainer.style.marginLeft = '15rem'
}

closeNavBtn.addEventListener('click', closeNavigationBar, false)

function closeNavigationBar() {
	navMenuBar.style.marginLeft = '-25rem'
	event.preventDefault()
	pageContainer.style.marginLeft = '0'
}








