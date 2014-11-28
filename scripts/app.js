(function (document) {
	'use strict';

	var template = document.querySelector('#main-template'),
			loginDropdownButton = document.querySelector('#login-button'),
			loginDropdown = document.querySelector('#login-dropdown'),
			logoutButton = document.querySelector('#logout-button'),
			pages = document.querySelector('core-animated-pages'),
			//tabs = document.querySelector('paper-tabs'),
			fhFirebaseLogin = document.querySelector('fh-firebase-login');

	console.log(fhFirebaseLogin.user);
	if(!fhFirebaseLogin.user) {
		pages.selected = 1;
		//tabs.selected = 1;
		fhFirebaseLogin.activeForm = 'login';
	}
	
//	tabs.addEventListener('core-select', function () {
//		pages.selected = tabs.selected;
//	});

	document.addEventListener('polymer-ready', function () {
		// Perform some behaviour
		console.log('Polymer is ready to rock!');
	});

	template.keyHandler = function(e, detail, sender) {
		var pages = document.querySelector('#pages');

		// Select page by num key. 
		var num = parseInt(detail.key);
		if (!isNaN(num) && num <= this.pages.length) {
			pages.selectIndex(num - 1);
			return;
		}

		switch (detail.key) {
			case 'left':
			case 'up':
				pages.selectPrevious();
				break;
			case 'right':
			case 'down':
				pages.selectNext();
				break;
			case 'space':
				detail.shift ? pages.selectPrevious() : pages.selectNext();
				break;
		}
	};
	
	template.loginDropdown = function(event, detail, sender) {
		//console.dir(sender);
		//sender.nextElementSibling.toggle();
		pages.selected = 1;
		//tabs.selected = 1;
		fhFirebaseLogin.activeForm = 'login';
	};
	
	template.logout = function(event, detail, sender) {
		fhFirebaseLogin.logout();
	};
	
	
	// wrap document so it plays nice with other libraries
	// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));