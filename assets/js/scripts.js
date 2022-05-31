let navMenuBar = document.getElementById('navMenuBar')
let openNavBtn = document.getElementById('openNavBtn').addEventListener('click', openNavMenu)
let closeNavBtn = document.getElementById('closeNavBtn').addEventListener('click', closeNavMenu)
let pageContainer = document.getElementById('pageContainer')

// 1
// - 

// 2
// - If the navbar open
// - Then make the openNavBtn not display itself
navMenuBar.style.marginLeft = '-15rem'

function openNavMenu() {
		event.preventDefault()
		navMenuBar.style.marginLeft = '0'
		// pageContainer.style.marginLeft = '15rem'
		console.log("Opening Sidebar")	
}
	
function closeNavMenu() {
	event.preventDefault()
	navMenuBar.style.marginLeft = '-15rem'
	// pageContainer.style.marginLeft = '0'
	console.log("Closing Sidebar")
}

// if (navMenuBar.style.width = '30rem') {
// 	console.log('Your Menu is not showing right now')
// } else


