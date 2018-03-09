var app = angular.module('myApp', ['ngResource']);

app.controller('UserController', ['$scope', '$resource',function($scope,$resource) {
    
    function fetchAllUsers(){
        $scope.userss = $resource('http://localhost:8080/user'
        ).query(function(data){return data;});
    };
    fetchAllUsers();
    
    $scope.refresh = function(){
    	fetchAllUsers();
    };
    
    $scope.create = function(){
    	User = $resource(
    		    "http://localhost:8080/create",
    		    {},
    		    {save: {method:'PUT',isArray:false}}
    	);
    	
    	var user = {};
		
		user.id = $scope.userForm.id;
		user.name = $scope.userForm.name;
		user.phoneNo = $scope.userForm.mobile;
		user.password = $scope.userForm.password;
		user.confirmPassword = "";
		user.email = $scope.userForm.email;
		
		$scope.Message = User.save(user);
				
		$scope.userForm.id = "";
		$scope.userForm.name="";
		$scope.userForm.mobile="";
		$scope.userForm.password="";
		$scope.userForm.email="";
    };
    
    $scope.deleteRec = function(){
    	User = $resource(
    		    "http://localhost:8080/delete/:id",
    		    {},
    		    {save: {method:'DELETE', params: {id: '@id'}}}
    	);
    	
			
	delete({id: $scope.userForm.id}).then(function successCallback(response) {
			$scope.Message = response;
		}, function errorCallback(response) {
		    
		});
				
		$scope.userForm.id = "";
		$scope.userForm.name="";
		$scope.userForm.mobile="";
		$scope.userForm.password="";
		$scope.userForm.email="";
    };
    
    
    $scope.update = function(){
    		
    	User = $resource(
    		    "http://localhost:8080/update/:id",
    		    {},
    		    {save: {method:'PUT', params: {id: '@id'}}}
    	);
    	
		var user = {};
		
		user.id = $scope.userForm.id;
		user.name = $scope.userForm.name;
		user.phoneNo = $scope.userForm.mobile;
		user.password = $scope.userForm.password;
		user.confirmPassword = "";
		user.email = $scope.userForm.email;
		
		$scope.Message = User.update({id: $scope.userForm.id}, user);
				
		$scope.userForm.id = "";
		$scope.userForm.name="";
		$scope.userForm.mobile="";
		$scope.userForm.password="";
		$scope.userForm.email="";
    };
    
}]);
