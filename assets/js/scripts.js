// Navigation Script 

// function toggleNavigationMenu() {
// 	if(navMenuBar.className = 'navMenu'){
// 			navMenuBar.className = 'navMenuClosed'
// 			console.log('nav menu has changed to "NavMenuClosed" ')
// 		}
// }

// openNavBtn.addEventListener('click', toggleNavigationMenu, false)

if(document.getElementById('navMenuBar').style.marginLeft = '-20rem')
{
	document.getElementById('openNavBtn').addEventListener('click', function() 
		{
			document.getElementById('navMenuBar').style.marginLeft = '0rem'		
	})
}	

