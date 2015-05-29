angular.module('starter.controllers', ['ngCordova', 'ngMap'])

.controller('MapViewController', function($scope, $state, Markers, $ionicLoading) {
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8
	};
	$scope.markers = Markers.parking();
	$scope.map.styles = [{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'color':'#f8f8f8'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#676D75'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'color':'#cfd5db'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#666666'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'visibility':'on'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#585d63'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#43B7EA'}]}];
	$scope.mainSelected = false;

	$scope.test = ['hello', 'world'];

	$scope.centerOnMe = function () {
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
      //$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      //$scope.map.center.latitude = pos.coords.latitude; 
      //$scope.map.center.longitude = pos.coords.longitude;

      $scope.map.center.latitude = 45; 
      $scope.map.center.longitude = -45;

      $ionicLoading.hide()
  }, function (error) {
  	alert('Unable to get location: ' + error.message);
  });
	};


	$scope.pageSelect = function(b) {
		if(b == 1) {
			$scope.map.markers = Markers.parking();
		} else {
			$scope.map.markers = [];
		}

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

.controller('ShameViewController', function($scope, WallOfShame) {
	$scope.posts = WallOfShame.getRecent();

	$scope.goToPage = function(s) {
		$state.go(s);
	};
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

