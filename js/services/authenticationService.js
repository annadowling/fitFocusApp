/**
 * Created by annadowling on 17/03/2016.
 * This service proides the authentication data model which is used to register and authenticate users to the application.
 * This service is used with the registrationController to handle user login, registration and logout requests.
 */

fitFocusApp.factory('Authentication',
  ['$rootScope', '$firebaseAuth', '$firebaseObject',
  '$location', 'FIREBASE_URL',
  function($rootScope, $firebaseAuth, $firebaseObject,
    $location, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  auth.$onAuth(function(authUser) {
    if (authUser) {
      var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid ); //returns the stored user id from the domain page on firebase
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
    } else {
      $rootScope.currentUser = '';
    }
  });


  return {
    login: function(user) {
      auth.$authWithPassword({
        email: user.email, //authenticate the user email
        password: user.password // authenticate the user password
      }).then(function(regUser) {
        $location.path('/dashboard'); //sets the successful login path to the dashboard landing page
      }).catch(function(error) {
       $rootScope.message = error.message; // catches login errors
      });
    }, //login

    logout: function() {
      return auth.$unauth(); // revokes authentication and logs the user out
    }, //logout

    requireAuth: function() {
      return auth.$requireAuth(); //used to check for authentication for certain pages specified in app.js
    }, //require Authentication

    register: function(user) {
      auth.$createUser({ // create the user with a password and email set by the user
        email: user.email,
        password: user.password
      }).then(function(regUser) {

        var regRef = new Firebase(FIREBASE_URL + 'users') // adds this user to the firebase datastore in users
        .child(regUser.uid).set({
          date: Firebase.ServerValue.TIMESTAMP,
          regUser: regUser.uid,
          firstname: user.firstname,
          lastname: user.lastname,
          email:  user.email
        }); //user info

        $rootScope.message = "Hi " + user.firstname + // message pop up on successful registration by a user.
        ", Thanks for registering";
      }).catch(function(error) {
        $rootScope.message = error.message;
      }); // //createUser
    } // register
  };

}]); //factory
