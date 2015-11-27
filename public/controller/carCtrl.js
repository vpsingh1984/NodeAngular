
scotchApp.controller('carCtrl', ['$scope', '$http', function($scope, $http){
		console.log('car controller');

		var carRefresh = function(){
			$http.get('/carlist').success(function(response){
				console.log('I got the response');
				$scope.carlist = response;
			});
		};
		carRefresh();

}]);