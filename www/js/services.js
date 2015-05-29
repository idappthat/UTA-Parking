angular.module('starter.services', [])

.factory('Markers', function() {
  var parkingLots = [
    { 
      name: 'Texas Hall',
      coords: {
        lat: '32.728830', 
        lng: '-97.115611'
      }
    }, {
      name: 'Trinity',
      coords: {
        lat: '32.730060', 
        lng: '-97.117277'
      }
    }, {
      name: 'Social Work Parking Lot',
      coords: {
        lat: '32.735003', 
        lng: '-97.113465'
      }
    }, {
      name: 'MAC Parking Lot',
      coords: {
        lat: '32.733306', 
        lng: '-97.117821',
      }
    }, {
      name: 'UH Parking Lot',
      coords: {
        lat: '32.727918',
        lng: '-97.112789'
      }
    }, {
      name: 'Doug Russel Parking Lot',
      coords: {
        lat: '32.725869',
        lng: '-97.112886'
      }
    }, {
      name: 'Tennis Courts Parking Lot',
      coords: {
        lat: '32.731186',
        lng: '-97.119699'
      }
    }
  ];

  return {
    parking: function() {
      return parkingLots;
    }
  };
})

.factory('WallOfShame', function($http) {
  var shame = {};

  var tempList = [{
    likes: 3,
    image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ryan_Gosling_2_Cannes_2011_(cropped).jpg/220px-Ryan_Gosling_2_Cannes_2011_(cropped).jpg',
    date: '10/12/15',
    user: {
      name: 'Cameron Moreau',
      image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ryan_Gosling_2_Cannes_2011_(cropped).jpg/220px-Ryan_Gosling_2_Cannes_2011_(cropped).jpg'
    }
  }];

  shame.getRecent = function() {
    return tempList;
  };

  return shame;
});
