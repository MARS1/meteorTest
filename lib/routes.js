Router.configure({
	layoutTemplate: 'appLayout',
	yieldTemplate: {
		header: {to: 'header'},
		home: {to: 'home'},
		footer: {to: 'footer'}
	}
});


Router.route('/' , {
	name: "home"
});

