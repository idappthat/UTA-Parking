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

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Social Work Parking Lot',
    latLong: '32.735003, -97.113465',
  }, {
    id: 1,
    name: 'MAC Parking Lot',
    latLong: '32.733306, -97.117821',
  }, {
    id: 2,
    name: 'UH Parking Lot',
    latLong: '32.727918, -97.112789',
  }, {
    id: 3,
    name: 'Doug Russel Parking Lot',
    latLong: '32.725869, -97.112886',
  }, {
    id: 4,
    name: 'Tennis Courts Parking Lot',
    latLong: '32.731186, -97.119699',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
