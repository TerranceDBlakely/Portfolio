let navMenuBar = document.getElementById('navMenuBar')
let openNavBtn = document.getElementById('openNavBtn')
let closeNavBtn = document.getElementById('closeNavBtn')

let openBtn = openNavBtn.addEventListener('click', openNavMenu)
let closeBtn = closeNavBtn.addEventListener('click', closeNavMenu)

function openNavMenu() {
		event.preventDefault()
		navMenuBar.style.marginLeft = '0'
		console.log("Opening Sidebar")	
}
	
function closeNavMenu() {
	event.preventDefault()
	navMenuBar.style.marginLeft = '-30rem'
	console.log("Closing Sidebar")
}

