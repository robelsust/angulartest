(function(){
var app=angular.module('store', []);

app.controller('StoreController', function(){
	this.product = gem;
});

var gem={
	name: 'RS Test',
	price: 2.95,
	description: 'Just a test RS',
	canPurchase: false,
	soldOut: false
};

app.controller('RsController', function($scope){
	$scope.myval=1;
	$scope.elements = [1,2,5,6,8,9,5];

	$scope.inc = function(){
		$scope.myval+=1	;	
	};

	$scope.isEven = function(){
		return $scope.myval%2==0;
	}
});

app.controller('NewController', function($scope){
	$scope.mydata = {'val':'1221'}
	$scope.$watch('mydata.val', function(newval){
		$scope.mydata.toolong = newval.length > 15;
	});
});



})();