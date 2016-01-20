(function(){
	var foodapp = angular.module("FoodApp",[]);
	
	
	foodapp.factory('httpService',['$http',function($http) {
  		
    	return {
    		getData : function(response){
    	$http.get("http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY").success(response);
    		},
    		getData1 :function(res){
    			return $http.get("http://api.nal.usda.gov/ndb/reports/?ndbno="+res+''+"&type=f&format=json&api_key=DEMO_KEY").then(function(response){
    				return response.data;
    			});	
    		}
    	}
   		
  		
	}]);
	
	foodapp.controller("BodyController",['httpService','$scope','$http',function(httpService,$scope,$http){
			httpService.getData(function(response){
				$scope.data = response;
			});
			
			$scope.call = function(id){
				httpService.getData1(id).then(function(response){
				$scope.data1=response;
			});
				console.log(id);
			}

	}]);
	

})();