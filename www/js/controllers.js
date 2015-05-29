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





  /*$scope.map = {};
  $scope.$on('mapInitialized', function(evt, evtMap) {
      $scope.map = evtMap;
  });
  $scope.map.markers = [{
  	lat: 32.730346,
  	lng: -97.114586,
  }];*/

  /*$scope.map.markers[0].setMap($scope.map);
  //$scope.markers = Markers.parking();
  $scope.map.styles = [{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'color':'#f8f8f8'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#676D75'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'color':'#cfd5db'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#666666'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'visibility':'on'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#585d63'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#43B7EA'}]}];
  $scope.mainSelected = false;*/
  
  /*$scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

      $ionicLoading.hide()
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };*/


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

  $scope.callDaPolice = function() {
    alert("whoo wooo");
    console.log(Markers.parking());
  };

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
