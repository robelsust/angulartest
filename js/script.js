 var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/angular-test/pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/angular-test/pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '/angular-test/pages/contact.html',
                controller  : 'contactController'
            })
            // order details page
            .when('/order/:orderId', {
                templateUrl : '/angular-test/pages/order.html',
                controller  : 'orderController',
                customdata  : 'my custom 11111'
            })
            .when('/order/:orderId/:anotherId', {
                templateUrl : '/angular-test/pages/order.html',
                controller  : 'orderController',
                customdata  : 'my custom 2222222'
            }).            
            otherwise({
                    redirectTo: '/'
            });
    });

    // create the controller and inject Angular's $scope
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

    scotchApp.controller('orderController', function($scope, $route, $routeParams){
        $scope.order_id = $routeParams.orderId;
        var foo = $route.current.customdata;
        alert(foo);
    });