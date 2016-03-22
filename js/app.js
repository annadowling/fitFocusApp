/**
 * Created by annadowling on 17/03/2016.
 *
 * This is the central application javascript file which primarily controls the routing of pages and their associated controllers to the DOM.
 * It also handles the application declaration along with the core modules used within the application.
 * These modules include ngRoute for routing, firebase for data storage,
 * ngMaterial for google design structures, ngMdIcons for material icon standards
 * and ngMessages for material Message display.
 */

var fitFocusApp = angular.module('fitFocusApp',
    ['ngRoute', 'firebase', 'ngMaterial', 'ngMdIcons', 'ngMessages'])
    .constant('FIREBASE_URL', 'https://fitfocusapp.firebaseio.com/');


fitFocusApp.run(['$rootScope', '$location', //redirects the user to the login page on authentication failure.
    function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError',
            function (event, next, previous, error) {
                if (error == 'AUTH_REQUIRED') {
                    $rootScope.message = 'Sorry, you must log in to access that page';
                    $location.path('/login');
                } // AUTH REQUIRED
            }); //event info
    }]); //run

fitFocusApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationController'
    }).
    when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
    }).
    when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'RegistrationController',
        resolve: {
            currentAuth: function (Authentication) { // checks that the user is authenticated for page access.
                return Authentication.requireAuth();
            }
        }
    }).
    when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController',
        resolve: {
            currentAuth: function (Authentication) { // checks that the user is authenticated for page access.
                return Authentication.requireAuth();
            }
        }
    }).
    when('/map',
        {
            templateUrl: 'views/map.html',
            controller: 'MapController',
            resolve: {
                currentAuth: function (Authentication) { // checks that the user is authenticated for page access.
                    return Authentication.requireAuth();
                }
            }
        }).
        when('/forum',
        {
            templateUrl: 'views/forum.html',
            controller: 'ForumController',
            resolve: {
                currentAuth: function (Authentication) { // checks that the user is authenticated for page access.
                    return Authentication.requireAuth();
                }
            }
        }).
        when('/bookClass',
            {
                templateUrl: 'views/bookClass.html',
                controller: 'bookClassController',
                resolve: {
                    currentAuth: function (Authentication) { // checks that the user is authenticated for page access.
                        return Authentication.requireAuth();
                    }
                }
            }).otherwise({
        redirectTo: '/login'
    });
}]);



