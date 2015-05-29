angular.module('starter.services', [])

.factory('Markers', function() {
  var parkingLots = {
    m1: { 
      message: 'Texas Hall',
      lat: 32.728830, 
      lng: -97.115611
    }, 
    m2: {
      message: 'Trinity',
      lat: 32.730060, 
      lng: -97.117277
    }, 
    m3: {
      message: 'Social Work Parking Lot',
      lat: 32.735003, 
      lng: -97.113465
    }, 
    m4: {
      message: 'MAC Parking Lot',
      lat: 32.733306, 
      lng: -97.117821,
    }, 
    m5: {
      message: 'UH Parking Lot',
      lat: 32.727918,
      lng: -97.112789
    }, 
    m6: {
      message: 'Doug Russel Parking Lot',
      lat: 32.725869,
      lng: -97.112886
    }, 
    m7: {
      message: 'Tennis Courts Parking Lot',
      lat: 32.731186,
      lng: -97.119699
    }
  };

  var bikeRacks = {
    m1: { 
      lat: 32.7302705,
      lng: -97.11782098 },
    m2: { 
      lat: 32.73365495,
      lng: -97.11591125 },
    m3: { 
      lat: 32.73286074,
      lng: -97.11528897 },
    m4: { 
      lat: 32.7341062,
      lng: -97.11553574 },
    m5: { 
      lat: 32.73336614,
      lng: -97.11720943 },
    m6: { 
      lat: 32.73119108,
      lng: -97.11973071 },
    m7: { 
      lat: 32.73356921,
      lng: -97.12195158 },
    m8: { 
      lat: 32.73448073,
      lng: -97.1131593 },
    m9: { 
      lat: 32.73327589,
      lng: -97.10769296 },
    m10: { 
      lat: 32.73262609,
      lng: -97.10786462 },
    m11: { 
      lat: 32.73168296,
      lng: -97.10786998 },
    m12: { 
      lat: 32.72873617,
      lng: -97.11050391 },
    m13: { 
      lat: 32.7279329,
      lng: -97.10731208 },
    m14: { 
      lat: 32.7269491,
      lng: -97.1091789 },
    m15: { 
      lat: 32.72498147,
      lng: -97.10843861 },
    m16: { 
      lat: 32.72604652,
      lng: -97.11286426 },
    m17: { 
      lat: 32.72583893,
      lng: -97.11055756 },
    m18: { 
      lat: 32.72452115,
      lng: -97.11223125 },
    m19: { 
      lat: 32.72324848,
      lng: -97.11205959 },
    m20: { 
      lat: 32.72323043,
      lng: -97.11055756 },
  };

  return {
    parking: function() {
      return parkingLots;
    },
    bikes: function() {
      return bikeRacks;
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
