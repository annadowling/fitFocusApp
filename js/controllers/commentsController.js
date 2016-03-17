/**
 * Created by annadowling on 17/03/2016.
 */


fitFocusApp.controller('CommentsController', ['$scope',
    'PostsService',
    '$routeParams',
    function ($scope,PostsService ,$routeParams) {
        $scope.post = PostsService.getPost($routeParams.post_id)
        $scope.incrementUpvotes = function(comment) {
            comment.upvotes += 1;
        };
        $scope.addComment = function(){
            $scope.post.comments.push({
                body: $scope.comment.body,
                author: $scope.comment.author ,
                upvotes: 0
            });
            $scope.comment = {} ;
        }
    }]);
