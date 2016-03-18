var fitFocusApp = angular.module('fitFocusApp',
    ['ngRoute', 'firebase', 'ngMaterial', 'ngMdIcons', 'ngMessages'])
    .constant('FIREBASE_URL', 'https://fitfocusapp.firebaseio.com/');


fitFocusApp.run(['$rootScope', '$location',
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
            currentAuth: function (Authentication) {
                return Authentication.requireAuth();
            } //current Auth
        } //resolve
    }).
    when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController',
        resolve: {
            currentAuth: function (Authentication) {
                return Authentication.requireAuth();
            } //current Auth
        } //resolve
    }).
    when('/posts/:post_id/comments',
        {
            templateUrl: 'views/comments.html',
            controller: 'CommentsController',
            resolve: {
                currentAuth: function (Authentication) {
                    return Authentication.requireAuth();
                } //current Auth
            } //resolve
        }).
        when('/map',
            {
                templateUrl: 'views/map.html',
                controller: 'PrincipalController',
                resolve: {
                    currentAuth: function (Authentication) {
                        return Authentication.requireAuth();
                    } //current Auth
                } //resolve
            }).otherwise({
        redirectTo: '/login'
    });
}]);



