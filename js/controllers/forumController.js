/**
 * Created by annadowling on 19/03/2016.
 */
(function () {
    var DialogCtrl, List, ForumController, base;
    List = function () {
        function List(baseURL, $firebaseArray) {
            return $firebaseArray(new Firebase(baseURL));
        }

        return List;
    }();
    ForumController = function () {
        function ForumController(List, $mdToast, $mdDialog) {
            this.list = List;
            this.addItem = function () {
                List.$add({
                    name: this.name,
                    message: this.message
                }).then(function (ref) {
                    var id;
                    id = ref.key();
                    return list.$indexFor(id);
                });
                this.name = '';
                this.message = '';
                return $mdToast.show($mdToast.simple().textContent('Message added to the forum!'));
            };
            this.removeItem = function (e) {
                return List.$remove(e).then(function (ref) {
                    return ref.key() === item.$id;
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
    base = {url: 'https://fitfocusapp.firebaseio.com/'};
    fitFocusApp.value('baseURL', base.url).factory('List', [
        'baseURL',
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