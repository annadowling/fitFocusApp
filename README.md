#Assignment 1 - AngularJS app.

+ Name: Anna Dowling
+ Student Number: 08453713

###Overview.
...... A statement of the app concept and objectives (about 1/2 page) ........

### List of user features (excluding user registration and authentication)
 
 + Top Classes page with add post and rate post functionality. View by date or top rated classes.
 + Book a class page to select a class time slot to attend.
 + User forum for posting messages.
 + Google Maps location search for finding a class location upon input of directions or general location name.

###Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ angular
+ angular-material
+ angular-material css
+ angular-route
+ angular-animate
+ angular-aria
+ maps-api-v3
+ firebase 2.2.4
+ angularfire 1.1.3
+ lodash 4.6.1


. . . . . . Also, explain (to a third party) what steps one must take to run your app after cloning it from the repository, e.g. any non-standard software installation ; any environment setup; how to start app; where to view app in browser . . . . . . . 

###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image2]

###UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (excluding user regeneration and login views) . . . . . . . 

![][image3]

###Routing.

+ /login - views/login.html
+ /register - views/register.html
+ /dashboard - views/dashboard.html
+ /posts - views/posts.html
+ /map - views/map.html
+ /forum - views/forum.html
+ /bookClass - views/bookClass.html
+ redirectTo - /login - views/login.html

###Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

###Independent learning.

+ Angular Material Design: https://material.angularjs.org
+ Firebase: https://fitfocusapp.firebaseio.com/
+ Google Maps api

[image1]: ./model.png
[image2]: ./design.png
[image3]: ./screen.png