/**
 * Created by annadowling on 17/03/2016.
 */

fitFocusApp.controller('PostsController', ['$scope', 'PostsService', '$mdDialog',
    function ($scope, PostsService, $mdDialog) {
        $scope.posts = PostsService.getPosts()
        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
        $scope.showAdd = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                scope: $scope,
                template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"><h1>Add a Post</h1> <form name="postForm" novalidate ng-submit="addPost()"> <div layout layout-sm="column"> <md-input-container flex> <label>Title</label> <input type="text" name="title"class="form-control" ng-model="newPost.title" ng-required> </md-input-container> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Date</label> <input type="date" name="date" class="form-control" ng-model="newPost.date"> </md-input-container> <md-input-container flex> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Link</label> <input type="url" class="form-control" ng-model="newPost.link"> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Username</label> <input type="text" name="username"class="form-control" ng-model="newPost.username" ng-required> </div> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button type="submit" class="btn btn-primary" ng-click="addPost" ng-disabled="postForm.$pristine || (postForm.$dirty && postForm.$invalid) "> Post </md-button></div> </md-dialog>'
                ,
                targetEvent: ev
            });
            //$scope.addPost = function () {
            //    $mdDialog.addPost.then(function () {
            //        var new_id = 1 + $scope.posts[$scope.posts.length - 1].id
            //        $scope.posts.push({
            //            title: $scope.newPost.title,
            //            id: new_id,
            //            link: $scope.newPost.link,
            //            username: $scope.newPost.username,
            //            comments: [],
            //            upvotes: 0
            //        });
            //        $scope.newPost = {}
            //    });
            //};
        };
    }]);

function DialogController($scope, $mdDialog) {
    //$scope.hide = function() {
    //    $mdDialog.hide();
    //};
    //$scope.cancel = function() {
    //    $mdDialog.cancel();
    //};
    $scope.addPost = function () {
        $mdDialog.showAdd.then(function () {
            var new_id = 1 + $scope.posts[$scope.posts.length - 1].id
            $scope.posts.push({
                title: $scope.newPost.title,
                id: new_id,
                link: $scope.newPost.link,
                username: $scope.newPost.username,
                comments: [],
                upvotes: 0
            });
            $scope.newPost = {};
            $mdDialog.hide();
        });
    };
};






