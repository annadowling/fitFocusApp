/**
 * Created by annadowling on 19/03/2016.
 * This controller handles the addition of messages to the forum board by users.
 * These messages are stored and returned to the logged in user by firebase.
 */
(function () {
    var DialogCtrl, List, ForumController, base;
    List = function () {
        function List(baseURL, $firebaseArray) { // pass the app firebaseUrl to the function for use with storing the forum messages
            return $firebaseArray(new Firebase(baseURL));
        }

        return List;
    }();
    ForumController = function () {
        function ForumController(List, $mdToast, $mdDialog) {
            this.list = List;
            this.addItem = function () { //add item(name and message to the list)
                List.$add({
                    name: this.name,
                    message: this.message
                }).then(function (ref) {
                    var id;
                    id = ref.key();
                    return list.$indexFor(id); //returns the index position for the forum post
                });
                this.name = '';
                this.message = '';
                return $mdToast.show($mdToast.simple().textContent('Message added to the forum!'));
            };
            this.removeItem = function (e) { //delete the forum message from the list
                return List.$remove(e).then(function (ref) {
                    return ref.key() === item.$id; // gets the id of the item to be deleted form the html5 reference.
                });
            };
        }

        return ForumController;
    }();
    DialogCtrl = function ($mdDialog) {
        this.hide = function () {
            return $mdDialog.hide();
        };
        return this.cancel = function () {
            return $mdDialog.cancel();
        };
    };
    base = {url: 'https://fitfocusapp.firebaseio.com/'}; //sets the app url on firebase

    fitFocusApp.value('baseURL', base.url).factory('List', [
        'baseURL', // included the factory setting of the firebase connection here to keep all of these settings together.
        '$firebaseArray',
        List
    ]);

    fitFocusApp.controller('ForumController', [
        'List',
        '$mdToast',
        '$mdDialog',
        ForumController
    ]);
}.call(this));