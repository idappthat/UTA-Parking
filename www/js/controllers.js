angular.module('starter.controllers', ['ngCordova'])

.controller('MapViewController', function($scope, $state, Markers) {
  $scope.map = {};
  $scope.markers = Markers.parking();
  $scope.map.styles = [{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'color':'#f8f8f8'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#676D75'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'color':'#cfd5db'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.fill','stylers':[{'color':'#666666'}]},{'featureType':'road.highway.controlled_access','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'visibility':'on'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#676d75'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#585d63'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#43B7EA'}]}];
  $scope.mainSelected = false;

  $scope.test = ['hello', 'world'];



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

  $scope.goToPage = function(s) {
    $state.go(s);
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
});

// .controller('MapCoordinatesCtrl', function($scope, $compile) {
//       var TILE_SIZE = 256;

//       function bound(value, opt_min, opt_max) {
//         if (opt_min != null) value = Math.max(value, opt_min);
//         if (opt_max != null) value = Math.min(value, opt_max);
//         return value;
//       }

//       function degreesToRadians(deg) {
//         return deg * (Math.PI / 180);
//       }

//       function radiansToDegrees(rad) {
//         return rad / (Math.PI / 180);
//       }

//       function MercatorProjection() {
//         this.pixelOrigin_ = new google.maps.Point(TILE_SIZE / 2, TILE_SIZE / 2);
//         this.pixelsPerLonDegree_ = TILE_SIZE / 360;
//         this.pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);
//       }

//       MercatorProjection.prototype.fromLatLngToPoint = function(latLng,
//           opt_point) {
//         var me = this;
//         var point = opt_point || new google.maps.Point(0, 0);
//         var origin = me.pixelOrigin_;

//         point.x = origin.x + latLng.lng() * me.pixelsPerLonDegree_;

//         // Truncating to 0.9999 effectively limits latitude to 89.189. This is
//         // about a third of a tile past the edge of the world tile.
//         var siny = bound(Math.sin(degreesToRadians(latLng.lat())), -0.9999,
//             0.9999);
//         point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) *
//             -me.pixelsPerLonRadian_;
//         return point;
//       };

//       MercatorProjection.prototype.fromPointToLatLng = function(point) {
//         var me = this;
//         var origin = me.pixelOrigin_;
//         var lng = (point.x - origin.x) / me.pixelsPerLonDegree_;
//         var latRadians = (point.y - origin.y) / -me.pixelsPerLonRadian_;
//         var lat = radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) -
//             Math.PI / 2);
//         return new google.maps.LatLng(lat, lng);
//       };

//       $scope.$on('mapInitialized', function(event, map) {
//         var numTiles = 1 << map.getZoom();
//         var projection = new MercatorProjection();
//         $scope.chicago = map.getCenter();
//         $scope.worldCoordinate = projection.fromLatLngToPoint($scope.chicago);
//         $scope.pixelCoordinate = new google.maps.Point(
//             $scope.worldCoordinate.x * numTiles,
//             $scope.worldCoordinate.y * numTiles);
//         $scope.tileCoordinate = new google.maps.Point(
//             Math.floor($scope.pixelCoordinate.x / TILE_SIZE),
//             Math.floor($scope.pixelCoordinate.y / TILE_SIZE));
//       });
//     });

/*.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});*/
