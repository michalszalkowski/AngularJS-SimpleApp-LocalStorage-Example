angular.module('menuModule', [])
    .directive('menu', function () {
        return {
            controller: function ($scope, $http) {
                $http.get('app/module/menu/menu.json').success(function (data) {
                    $scope.menu = data;
                    $scope.submenu = data[0].sub;
                });
            },
            restrict: 'E',
            templateUrl: 'app/module/menu/menu.tpl.html'
        };
    });