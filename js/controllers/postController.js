/**
 * Created by annadowling on 17/03/2016.
 */

fitFocusApp.controller('PostsController', ['$scope','PostsService',
    function($scope,PostsService) {
        $scope.posts = PostsService.getPosts()
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
        $scope.addPost = function(){
            var new_id = 1 + $scope.posts[$scope.posts.length - 1].id
            $scope.posts.push({
                title: $scope.newPost.title,
                id: new_id,
                link: $scope.newPost.link,
                username : $scope.newPost.username,
                comments : [],
                upvotes: 0
            });
            $scope.newPost = { }
        }
    }]);
