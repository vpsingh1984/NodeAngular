
//var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
		console.log('hello vijay');

		var refresh = function(){
			$http.get('/contactlist').success(function(response){
				console.log('I got the response');
				$scope.contactlist = response;
			});
		};
		refresh();

		$scope.addContact = function(){
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				$scope.contactlist.push({
		            name: $scope.name,
		            email: $scope.email,
		            number: $scope.fullName
		        });
				$scope.contact = '';
			});
			refresh();
			
		};


		$scope.remove = function(id) {
			console.log(id);
			$http.delete('/contactlist/' + id).success(function(response){
				refresh();
			})
		};

		$scope.edit = function(id) {
			console.log(id);
			$http.get('/contactlist/' + id).success(function(response){
				$scope.contact = response;
			});
		};

		$scope.update = function(){
			console.log($scope.contact._id);
			$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
				refresh();
			});
		};

		$scope.clear =  function() {
			$scope.contact = " ";
		};

		// var carRefresh = function(){
		// 	$http.get('/cars').success(function(response){
		// 		console.log('I got the response');
		// 		$scope.carlist = response;
		// 	});
		// };
		// carRefresh();

}]);