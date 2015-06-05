angular.module('starter.controllers', ['ngCordova', 'leaflet-directive'])

.controller('MapViewController', function($scope, $state, Markers, $ionicLoading, leafletData) {
	$scope.map = leafletData.getMap('map');
	$scope.searchMode = false;

	$scope.mapData = {
		layers: {
			baselayers: {
	            mapbox_light: {
	                name: 'Mapbox Light',
	                url: 'https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token={apikey}',
	                type: 'xyz',
	                layerOptions: {
	                    apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
	                    mapid: 'bufanuvols.lia22g09'
	                }
	            },
	            osm: {
	                name: 'OpenStreetMap',
	                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	                type: 'xyz'
	            }
            }
		},
		center: {
			lat: 32.730346, 
			lng: -97.114586,
			zoom: 17
		},
		markers: Markers.parking()
	};

	$scope.map.then(function(map) {
		map.attributionControl.setPrefix("");
	});

  $scope.centerOnMe = function() {
    console.log("test");
  };

  $scope.pageSelect = function(b) {
  	switch(b) {
  		case 1:
  			$scope.mapData.markers = Markers.parking();
  			break;
		case 4:
			$scope.mapData.markers = Markers.bikes();
			break;
		default:
			$scope.mapData.markers = {};
  	}
    //$scope.mapData.markers = {};

    console.log($scope.map.markers);
  };

  $scope.mainSelect = function() {
    $scope.mainSelected = !$scope.mainSelected;
  };
  
  // selects
  $scope.busSelect = function() {
	$scope.busSelected = !$scope.busSelected;
  }

  $scope.callDaPolice = function() {
    alert("whoo wooo");
    console.log(Markers.parking());
  };

})

.controller('ShameViewController', function($scope, WallOfShame) {
  $scope.posts = WallOfShame.getRecent();
})

.controller('CameraController', function($scope, $cordovaCamera) {

  $scope.test = "hello";

  $scope.takePicture = function() {
      var options = { 
          quality : 75, 
          destinationType : Camera.DestinationType.DATA_URL, 
          sourceType : Camera.PictureSourceType.CAMERA, 
          allowEdit : true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
          // An error occured. Show a message to the user
      });
  }
})

.controller('ControlCustomStateCtrl', function($scope) {
      $scope.home = new google.maps.LatLng(41.850033, -87.6500523);
      $scope.goHome = function() {
        $scope.map.setCenter($scope.home);
      }
      $scope.setHome = function() {
        $scope.home = $scope.map.getCenter();
      }
    });
