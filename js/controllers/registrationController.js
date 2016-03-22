/**
 * Created by annadowling on 17/03/2016.
 * The purpose of this controller is to handle user login, registration, and logout requests.
 * It also provides the menu display for the logged in user through the toggled mdSidenav directive.
 */

fitFocusApp.controller('RegistrationController',
    ['$scope', 'Authentication', '$mdSidenav',
        function ($scope, Authentication, $mdSidenav) {

            $scope.login = function () {
                Authentication.login($scope.user);
            }; //login the user by passing the currentUser scope using the Authentication service.

            $scope.logout = function () {
                Authentication.logout();
            }; //logout the user by passing the currentUser scope using the Authentication service.

            $scope.register = function () {
                Authentication.register($scope.user);
            }; // register the user by passing the currentUser scope

            $scope.toggleSidenav = function (menuId) {
                $mdSidenav(menuId).toggle(); //toggle or hide and show the sidenav menu passing the menu id to the mdSidenav directive.
            };
            $scope.menu = [ // links included in the menu model
                {
                    link: '#/posts',
                    title: 'Top Classes'
                },
                {
                    link: '#forum',
                    title: 'Forum'
                },
                {
                    link: '#/map',
                    title: 'Class Location'
                }
            ];

        }]);


