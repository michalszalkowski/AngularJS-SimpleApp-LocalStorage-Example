var btbwApp = angular.module('btbwApp',
    [
        'ngRoute' ,
        'menuModule',
        'storageModule'
    ]);

btbwApp.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            redirectTo: '/post'
        }).
        when('/post/create', {
            templateUrl: 'app/tpl/post/create.tpl.html',
            controller: 'PostCreateCtrl'
        }).
        when('/post', {
            templateUrl: 'app/tpl/post/list.tpl.html',
            controller: 'PostListCtrl'
        }).
        when('/about-us', {
            templateUrl: 'app/tpl/empty.tpl.html',
            controller: 'EmptyCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

btbwApp.controller('PostListCtrl', function ($scope, $http, storageService) {
    $scope.posts = storageService.getPosts();
});

btbwApp.controller('PostCreateCtrl', function ($scope, $http, storageService) {
    $scope.save = function () {
        storageService.savePost($scope.form);
        $scope.form.name = "";
        $scope.form.desc = "";
    }
});

btbwApp.controller('EmptyCtrl', function ($scope, $http) {
    log("EmptyCtrl");
});