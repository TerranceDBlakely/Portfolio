// Navigation Script 

let navMenuBar = document.getElementById('navMenuBar')
let openNavBtn = document.getElementById('openNavBtn')

function toggleNavigationMenu() {
	if(navMenuBar.className = 'navMenu'){
			navMenuBar.className = 'navMenuClosed'
			console.log('nav menu has changed to "NavMenuClosed" ')
		}
}

openNavBtn.addEventListener('click', toggleNavigationMenu, false)

