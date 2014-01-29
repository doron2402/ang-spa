	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

      //After user contact us
			.when('/contact/thanks', {
			  templateUrl : 'pages/thanks.html',
			  controller : 'thanksController'
			})
			
			//Signup page
			.when('/signup',{
			  templateUrl : 'pages/signup.html',
			  controller : 'signupController'
			})
			
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
			
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
	
	//Signup Controller
	scotchApp.controller('signupController', function($scope) {
		$scope.message = 'Please join us';
		$scope.signupOptions = ['Facebook','Google+','Twitter'];
	});
  
  scotchApp.controller('thanksController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Thanks for contacting us';
	});
	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});