#Assignment 1 - AngularJS app.

+ Name: Anna Dowling
+ Student Number: 08453713

###Overview.
This application is called Fit Focus. The concept of this application is to provide a facility for a user to find and/or rate fitness classes in their area,
in order to find a class which suits their needs.
The main aim of this application is to provide a way in which users can create a community for rating fitness classes. This is something which was inspired by
a lack of ratings on individual classes provided in my own area, which I was searching for online when trying to decide on classes to attend.
After attending classes which I did not enjoy and did not suit my needs, I thought that there may be a need for an application of this kind, to aid the decision making process for 
attending fitness classes. Health and fitness are quite popular topics in the media presently, with many gyms and personal trainers popping up which are mainly recommended based on word of mouth.
This application acts as a repository for fitness enthusiasts to make an informed decision on a class to attend.

This application makes use of the Angular Material design library to implement some of the core concepts of google app design and styling. Angular Material is the Angular implementation of 
Google's Material design standards and specification. These ui-components and directives give the application a clean and structured look and feel to the user.
The elements used would also be quite familiar to many users who have experience using any google applications or similar looking applications such as Facebook.
This provides a sense of familiarity to the user when navigating through the application.

Fit Focus provides a class ranking facility for adding posts and upvoting classes which the user wants to vote for.
This posts page can be viewed based on date added and also based on top rated classes. The user can click on the plus icon on the right hand side of the screen in order to add a class rating post
to the list. This then gets added to the list of posts when the user clicks post. i fthey wish to cancel adding their post, they can press the esc button on the keyboard, which will hide the dialog pop up.

This page also provides a link to a class booking facility, which allows the user to select a class time slot from the GUI interface. These time slots are currently hard-coded and are not stored,
with the intention of having these selections stored in the database for the second assignment. When the user clicks on a time slot the class the button then changes from green to red and displays
the text "Class full" to the user, in order to inform them that they have booked the class. This is the first stage of this functionality currently.

The application contains a forum, which stored messages posted using firebase. This acts as an area where users can submit questions which can then be answered by other users to gain further information.
These messages are saved to firebase and will all load regardless of who is logged in to the application. Users can also delete these posts.

The application contains a page for locating classes via google maps. This page requires the user to enter partial or full direction details.
This then returns location suggestions to the user which can be selected in the dropdown. 
Once a location is selected the map will fly to that address. The map can be viewed as satellite theme or terrain theme and includes markers and the drop in user for street view.
The map also has zoom functionality.

### List of user features (excluding user registration and authentication)
 
 + Top Classes page with add post and rate post functionality. View by date or top rated classes.
 + Book a class page to select a class time slot to attend.
 + User forum for posting messages.
 + Google Maps location search for finding a class location upon input of directions or general location name.

### Installation requirements.
+ angular v1.5.2
+ angular-material v1.1.0
+ angular-material-css v1.0.6
+ angular-route v1.5.3
+ angular-animate v1.5.3
+ angular-aria v1.5.3
+ maps-api-v3
+ firebase v2.4.1
+ angularfire v1.1.4
+ lodash v4.6.1


### Set Up
+ git clone or download the zip of the application from this address: https://github.com/annadowling/fitFocusApp.git 
+ Install http-server on your local machine using: npm install http-server -g or if you wish to install this only within the application dir use npm install http-server with the application folder.
+ To run the application, navigate to the directory and run te command http-server.
+ If you wish to stop the server press ctrl + c


###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image2]

### UI Design.

<b>Dashboard Greeting Page for user upon login</b>
![][image3]

<b>Top Classes Page</b>
![][image4]

<b>Forum Page</b>
![][image5]

### Routing

+ /login - views/login.html
+ /register - views/register.html
+ /dashboard - views/dashboard.html
+ /posts - views/posts.html
+ /map - views/map.html
+ /forum - views/forum.html
+ /bookClass - views/bookClass.html
+ redirectTo - /login - views/login.html

###Extra features
The application contains functionality to register and authenticate a user.

This information is stored using firebase. This stores the users firstname, lastname, email and password upon registration to the application via the registration view.
Once the user has registered they can then login via the login view. The application cannot be accessed without user registration and login. If a user trys to access internal pages without logging in
they will be redirected to the login view. Logout functionality is also in place on each page. Once the user clicks the logout button they are re-directed to the user login view.
If the user then tries to access an internal login page after logging out, they will be denied access and redirected to the login view to prompt them to log in.

### Independent learning

+ Angular Material Design: https://material.angularjs.org
+ Firebase: https://fitfocusapp.firebaseio.com/
+ Google Maps api v3 https://developers.google.com/maps/documentation/javascript/tutorial
+ lodash https://lodash.com/

[image1]: ./model.png
[image2]: ./design.png
[image3]: ./dashboardview.png
[image4]: ./postsview.png
[image5]: ./forumview.png

