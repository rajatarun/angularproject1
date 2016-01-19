(function(){
	var foodapp = angular.module("FoodApp",[]);
	
	
	/*  foodapp.factory('ndbId', function($rootScope) {
  		var sharedService = {};
    
    sharedService.ndbid = 09427;

    sharedService.setndbId = function(msg) {
    	this.ndbid=msg;
    	alert(this.ndbid);
        
    };

    return {"value":sharedService.ndbid};
  		
	});*/
	
	foodapp.controller("BodyController",function($scope,$http){
		var url = "http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY";
		$http.get(url).success(function(response){
			$scope.data=response;
		});

	});
	foodapp.controller("FoodBodyController",function($scope,$http){
		$http.get(" http://api.nal.usda.gov/ndb/reports/?ndbno="+$scope.$parent.ndbno+''+"&type=f&format=json&api_key=DEMO_KEY").success(function(response){
			$scope.data=response;
		});

	});

})();