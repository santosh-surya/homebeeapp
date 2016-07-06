angular.module('homebee.services', [])

.service('dataService', ['$http', function ($http) {

    var urlBase = 'http://jsonplaceholder.typicode.com';


    this.getGreeting = function () {
        return $http.get(urlBase+"/posts/1");
    };

}]);