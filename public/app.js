 // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);
    console.log('controller');
    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'AppCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'AppCtrl'
            })

            // route for the contact page
            .when('/cars', {
                templateUrl : 'pages/cars.html',
                controller  : 'carCtrl'
            }).otherwise('/');
    });

//     scotchApp.controller('mainController', function($scope) {
//         // create a message to display in our view
//         $scope.message = 'Everyone come and see how good I look!';
//     });
// scotchApp.controller('aboutController', function($scope) {
//         $scope.message = 'Look! I am an about page.';
//     });

//     scotchApp.controller('contactController', function($scope) {
//         $scope.message = 'Contact us! JK. This is just a demo.';
//     });

    