/**
 * Created by annadowling on 17/03/2016.
 */

fitFocusApp.factory('PostsService', [function(){
    var posts = [
        {
            title: 'Pilates Class Splashworld Gym Tramore',
            link: 'http://www.splashworld.ie/gym/pilates.html',
            username: 'fituser',
            upvotes: 10,
            comments: []
        },
        {
            title: 'Yoga Surfing Freedom Surf School Tramore',
            link: 'http://www.freedomsurfschool.com/surfing/yoga_surf',
            username: 'surferdude',
            upvotes: 9,
            comments: []
        },
        {
            title: 'Zumba Fitness Waterford',
            link: 'http://www.zumbawithadriana.com/p/zumba-classes-waterford.html',
            username: 'zumbaaddict',
            upvotes: 6,
            comments: []
        },
        {
            title: 'Waterford Road Runners Winter League',
            link: 'http://www.totaltiming.ie/wrr-winter-league/',
            username: 'roadrunner',
            upvotes: 2,
            comments: []
        },
        {
            title: 'Crossfit Waterford',
            link: 'http://www.crossfitwaterford.com/crossfit-women/',
            username: 'warrior',
            upvotes: 7,
            comments: []
        },
        {
            title: 'Balance Fitness Spinning',
            link: 'http://www.balance.ie/2-spinning-classes-waterford/',
            username: 'spinner',
            upvotes: 8,
            comments: []
        }
    ];
    var api = {
        getPosts : function() {
            return posts
        },
        getPost : function(id) {
            var result = null
            posts.forEach(function(post){
                if (post.id == id) {
                    result  = post
                }
            });
            return result
        }};
    return api
}]);
