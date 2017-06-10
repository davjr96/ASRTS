// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ui.grid', 'ui.grid.autoResize']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
});

app.controller('mainController', function($scope, $http, uiGridConstants) {
    $http.get("/api/races")
        .then(function(response) {
            $scope.races = response.data;
            $scope.gridOptions.data = $scope.races[0].times;
            $scope.selectedRace = $scope.races[0]
        });


    $scope.gridOptions = {
        enableFiltering: true,
        rowHeight: 45,
        columnDefs: [{
                field: 'racer'
            },
            {
                field: 'run1'
            },
            {
                field: 'run2'
            },
            {
                field: 'combined',
                sort: {
                    direction: uiGridConstants.ASC,
                    priority: 0,
                }
            }
        ]
    };

    $scope.selectRace = function() {
        $scope.gridOptions.data = $scope.selectedRace.times;
    }

});
