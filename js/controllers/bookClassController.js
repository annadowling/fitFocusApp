/**
 * Created by annadowling on 17/03/2016.
 * This controller handles the returning of the days model setup to the current scope of the bookClass.html page.
 * This displays the list of days and their time slots for class bookings.
 */

fitFocusApp.controller('bookClassController', ['$scope', function ($scope) {
    $scope.days = {
        monday: {
            name: 'Monday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        },
        tuesday: {
            name: 'Tuesday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        },
        wednesday: {
            name: 'Wednesday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        },
        thursday: {
            name: 'Thursday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        },
        friday: {
            name: 'Friday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        },
        saturday: {
            name: 'Saturday',
            slots: {
                900: {
                    time: '9:00am',
                    booked: false
                },
                110: {
                    time: '11:00am',
                    booked: false
                }
            }
        }

    };
}]);





