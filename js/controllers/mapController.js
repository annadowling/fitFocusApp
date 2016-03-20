///**
// * Created by annadowling on 17/03/2016.
// */
    fitFocusApp.config(iconConfiguration);
    fitFocusApp.controller('MapController', ['$scope', '$mdToast', MapController]);

    function iconConfiguration($mdIconProvider) {
        $mdIconProvider.defaultIconSet('icons_24x24.svg', 24);
    }

    function MapController($scope, $mdToast) {
        var map;
        var geocoder;

        $scope.view = {
            addressInput: '',
            places: [],
            selectedPlace: '',
            markers: [],
        };
        $scope.findAddress = findAddress;
        $scope.centralLocation = centralLocation;
        $scope.findMarkers = findMarkers;

        InitializeComponents();

        function InitializeComponents() {
            var mapConfig = {
                center: {
                    lat: 52.1618665,
                    lng: -7.1493735
                },
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            map = new google.maps.Map(document.getElementById('map'), mapConfig);
            geocoder = new google.maps.Geocoder();
        }

        function findAddress() {
            if (geocoder !== undefined) {
                geocoder.geocode({
                        address: $scope.view.addressInput
                    },
                    function(results, status) {
                        $scope.view.places = [];
                        $scope.view.selectedPlace = '';
                        switch (status) {
                            case google.maps.GeocoderStatus.OK:
                                console.log(results);
                                $scope.view.places = results;
                                if (results.length < 2) {
                                    $scope.view.selectedPlace = results[0].place_id;
                                    $scope.view.addressInput = results[0].formatted_address;
                                    centralLocation();
                                } else showMessage('Found ' + $scope.view.places.length + ' locations');
                                break;
                            case google.maps.GeocoderStatus.ZERO_RESULTS:
                                showMessage('No results found');
                                break;
                            case google.maps.GeocoderStatus.REQUEST_DENIED:
                                showMessage('The search request has been denied');
                                break;
                            case google.maps.GeocoderStatus.INVALID_REQUEST:
                                showMessage('Invalid search');
                                break;
                        }
                        $scope.$apply();
                    }
                );
            }
        }

        function centralLocation() {
            if ($scope.view.selectedPlace !== undefined & $scope.view.selectedPlace !== '') {
                var location = _.result(_.find($scope.view.places, function(x) {
                    return x.place_id === $scope.view.selectedPlace;
                }), 'geometry.location');
                if (location !== undefined) {
                    var marker = new google.maps.Marker({
                        position: location,
                        map: map
                    });
                    $scope.view.markers.push(marker);
                    map.setCenter(location);
                } else {
                    showMessage('Could not display the location');
                }
            }
        }

        function findMarkers() {
            for (var i = 0; i < $scope.view.markers.length; i++) {
                $scope.view.markers[i].setMap(null);
            }
            $scope.view.markers = [];
        }


        function simpleToastBase(message, position, delay, action) {
            $mdToast.show(
                $mdToast.simple()
                    .content(message)
                    .position(position)
                    .hideDelay(delay)
                    .action(action)
            );
        }

        function showMessage(message) {
            simpleToastBase(message, 'top right', 6000, 'X');
        }
    };

