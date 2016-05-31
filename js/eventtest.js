var rsEvent = angular.module('rsevent',[]);
rsEvent.controller('sController', function($scope){
	$scope.result = 0;

	$scope.updateResult = function(){
		$scope.result = parseInt($scope.num1) + parseInt($scope.num2);
	};
});