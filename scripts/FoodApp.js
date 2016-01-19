(function(){
	var foodapp = angular.module("FoodApp",[]);
	foodapp.controller("BodyController",function($scope,$http){
		$http.get("http://api.nal.usda.gov/ndb/reports/?ndbno=01267&type=f&format=json&api_key=DEMO_KEY").success(function(response){
			$scope.data=response;
		});
	});

})();