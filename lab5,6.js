var app = angular.module("web207", []);
    app.controller("web207-ctrl", function ($scope, $http) {
    var pageSize = 10;
    var link;
    var getProducts = function(){
        $http.get("https://6392e382ab513e12c5fc205a.mockapi.io/people?page=1&limit=" + pageSize)
        .then(function (response) {
        $scope.products = response.data
        })
    }
    getProducts();
        $scope.pageRange = function(){
            var range = [];
            for (let index = 1; index <= pageSize; index++) {
                range.push(index);
            }
            return range;
        }
        $scope.detail = function(id) {
            $http.get("https://6392e382ab513e12c5fc205a.mockapi.io/people/" +id)
        .then(function(response){
            $scope.products = response.data
        });
        }
    });
