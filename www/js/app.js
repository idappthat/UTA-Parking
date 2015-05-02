// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMap', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('map', {
    url: '/',
    templateUrl: 'templates/map-view.html',
    controller: 'MapViewController'
  })

  .state('shame', {
    url: '/shame',
    templateUrl: 'templates/shame-view.html'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html'
  })

  .state('settings-car', {
    url: '/profile/car',
    templateUrl: 'templates/settings-car.html'
  })

  .state('camera', {
    url: '/camera',
    templateUrl: 'templates/camera.html',
    controller: 'CameraController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
