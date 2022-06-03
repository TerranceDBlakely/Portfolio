// Navigation Script 

let navMenuBar = document.getElementById('navMenuBar')
let openNavBtn = document.getElementById('openNavBtn')
let closeNavBtn = document.getElementById('closeNavBtn')

var menu = {
	open: false,
	marginLeft: '-20rem',	
	getRect: function() {
		return navMenuBar.getBoundingClient()
	}
}

function toggleMenu() {
	// pageContainer 
	
	if (menu.open) {
		navMenuBar.style.marginLeft = '-20rem'
		menu.open = false
	}
	else {		
		navMenuBar.style.marginLeft = '0'
		menu.open = true
		}		
}










































// function openNavigationBar() {
// 	navMenuBar.style.marginLeft = '0'
// 	// event.preventDefault()
// 	pageContainer.style.marginLeft = '15rem'
// 	console.log('Navigation is Opening')
// }

// closeNavBtn.addEventListener('click', closeNavigationBar, false)

// function closeNavigationBar() {
// 	navMenuBar.style.marginLeft = '-25rem'
// 	// event.preventDefault()
// 	pageContainer.style.marginLeft = '0'
// 	console.log('Navigation is Closing')
// }








