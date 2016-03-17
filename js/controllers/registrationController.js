fitFocusApp.controller('RegistrationController',
  ['$scope', 'Authentication', '$mdSidenav',
  function($scope, Authentication, $mdSidenav) {
  
  $scope.login = function() {
    Authentication.login($scope.user);
  }; //login

  $scope.logout = function() {
    Authentication.logout();
  }; //logout

  $scope.register = function() {
    Authentication.register($scope.user);
  }; // register

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
    $scope.menu = [
      {
        link : '#/posts',
        title: 'Top Classes'
      },
      {
        link : '#/posts/:post_id/comments',
        title: 'Comments'
      },
      {
        link : '#/map',
        title: 'Class Location'
      }
    ];

}]); // Controller


